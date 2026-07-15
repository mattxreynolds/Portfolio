import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import ScrollToTop from '../utils/ScrollToTop';

function AppRouter() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='skills' element={<Skills />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default AppRouter;
