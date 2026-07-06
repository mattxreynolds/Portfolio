import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import PageContainer from './components/layout/PageContainer';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className='min-h-screen bg-white dark:bg-slate-950'>
      <Navbar />
      <PageContainer>
        <AppRouter />
      </PageContainer>
      <Footer />
    </div>
  );
}

export default App;
