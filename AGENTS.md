# Portfolio repository guidance

## Project overview

- This is Matt Reynolds' developer portfolio.
- The stack is React 19, TypeScript, Vite, Tailwind CSS 4, and React Router.
- Preserve the existing clean, minimal visual identity and light/dark theme.
- Do not make broader branding or design changes unless explicitly requested.

## Important files

- `src/data/profile.ts` is the source of truth for profile details, social links, the resume, and the profile photo.
- `src/data/projects.ts` is the source of truth for project content, ordering, categories, status, and featured selection.
- `src/index.css` defines the shared colour variables and theme palette.
- Reusable components belong under `src/components/`.
- Static profile assets belong under `src/assets/`.
- Browser and PWA icons belong under `public/`.

## Project data rules

- Project array order controls the order shown on the Projects page.
- Featured projects are selected using `featured` and displayed in array order.
- Keep exactly three projects featured unless explicitly requested otherwise.
- Keep project descriptions concise and similar in length.
- When adding a project category, update the `ProjectCategory` type, `projectCategories`, and the project-card category icon mapping together.
- Do not invent project features, technologies, URLs, or status information.

## UI conventions

- Use existing CSS variables and Tailwind theme classes instead of hard-coded colours.
- Ensure changes work in both light and dark modes.
- Preserve responsive behaviour across mobile, tablet, and desktop layouts.
- Prefer semantic HTML and accessible labels.
- External links must use `target="_blank"` with `rel="noreferrer"`.
- Reuse existing components and data structures before introducing new abstractions.
- Avoid gradients, excessive animation, and unnecessary decorative effects.

## Code conventions

- Follow the formatting and patterns already used in nearby files.
- Use TypeScript types instead of weakening types with `any`.
- Keep components focused and avoid premature abstraction.
- Do not add dependencies unless they are necessary and provide a clear benefit.
- Do not modify generated output in `dist/`.

## Verification

After code or content changes, run:

```bash
npm run lint
npm run build
```

- Confirm affected routes render without console or runtime errors.
- Check responsive behaviour when making layout changes.
- Check both light and dark themes when changing visual styles.
- Verify all newly introduced local files and URLs resolve correctly.

## Git workflow

- Do not commit changes unless explicitly requested.
- Keep commits focused on one logical change.
- Do not include unrelated working-tree changes.
- Use concise imperative commit messages.
- Never amend, squash, reset, force-push, or otherwise rewrite history unless explicitly requested.

## Development server

- When asked to start the development server, bind it to `127.0.0.1`.
- Keep an existing development server running while the user is actively reviewing changes.
