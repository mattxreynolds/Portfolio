import AppRouter from './routes/AppRouter';

function App() {
  return (
    <main className='min-h-screen bg-slate-100 px-4 py-10 text-slate-900'>
      <section className='mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow'>
        <AppRouter />
      </section>
    </main>
  );
}

export default App;
