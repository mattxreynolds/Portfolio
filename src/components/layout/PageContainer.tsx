type PageContainerProps = {
  children: React.ReactNode;
};

function PageContainer({ children }: PageContainerProps) {
  return (
    <main className='min-h-screen bg-white py-8 text-slate-950 dark:bg-slate-950 dark:text-white'>
      <div className='mx-auto max-w-6xl px-6'>{children}</div>
    </main>
  );
}

export default PageContainer;
