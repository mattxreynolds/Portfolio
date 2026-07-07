type PageContainerProps = {
  children: React.ReactNode;
};

function PageContainer({ children }: PageContainerProps) {
  return (
    <main className='min-h-screen py-8 bg-background text-text-primary'>
      <div className='mx-auto max-w-6xl px-6'>{children}</div>
    </main>
  );
}

export default PageContainer;
