import { useLayoutEffect, useRef, useState } from 'react';

type ProjectTagsProps = {
  tags: string[];
};

const maxLines = 2;

function ProjectTags({ tags }: ProjectTagsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const tagRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const moreRef = useRef<HTMLSpanElement | null>(null);

  const [visibleCount, setVisibleCount] = useState(tags.length);

  useLayoutEffect(() => {
    function calculateVisibleTags() {
      const container = containerRef.current;
      const measureContainer = measureRef.current;

      if (!container || !measureContainer) {
        return;
      }

      const containerWidth = container.offsetWidth;

      if (containerWidth === 0) {
        return;
      }

      const styles = window.getComputedStyle(measureContainer);
      const gap = Number.parseFloat(styles.columnGap || '0');

      const tagWidths = tagRefs.current.map((tag) => tag?.offsetWidth ?? 0);
      const moreWidth = moreRef.current?.offsetWidth ?? 0;

      function fitsInTwoLines(widths: number[]) {
        let lines = 1;
        let currentLineWidth = 0;

        for (const width of widths) {
          const nextWidth = currentLineWidth === 0 ? width : currentLineWidth + gap + width;

          if (nextWidth <= containerWidth) {
            currentLineWidth = nextWidth;
          } else {
            lines += 1;
            currentLineWidth = width;
          }

          if (lines > maxLines) {
            return false;
          }
        }

        return true;
      }

      let nextVisibleCount = tags.length;

      for (let count = tags.length; count >= 0; count -= 1) {
        const hiddenCount = tags.length - count;

        const widthsToTest =
          hiddenCount > 0 ? [...tagWidths.slice(0, count), moreWidth] : tagWidths.slice(0, count);

        if (fitsInTwoLines(widthsToTest)) {
          nextVisibleCount = count;
          break;
        }
      }

      setVisibleCount(nextVisibleCount);
    }

    calculateVisibleTags();

    const resizeObserver = new ResizeObserver(calculateVisibleTags);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [tags]);

  const hiddenCount = tags.length - visibleCount;
  const visibleTags = tags.slice(0, visibleCount);

  return (
    <>
      <div ref={containerRef} className='mt-5 flex flex-wrap gap-2'>
        {visibleTags.map((tag) => (
          <span
            key={tag}
            className='rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent'
          >
            {tag}
          </span>
        ))}

        {hiddenCount > 0 && (
          <span className='rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-text-muted'>
            +{hiddenCount}
          </span>
        )}
      </div>

      <div
        ref={measureRef}
        className='pointer-events-none invisible absolute left-0 top-0 flex flex-wrap gap-2'
        aria-hidden='true'
      >
        {tags.map((tag, index) => (
          <span
            key={tag}
            ref={(element) => {
              tagRefs.current[index] = element;
            }}
            className='rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent'
          >
            {tag}
          </span>
        ))}

        <span
          ref={moreRef}
          className='rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-text-muted'
        >
          +{tags.length}
        </span>
      </div>
    </>
  );
}

export default ProjectTags;
