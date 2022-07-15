import Services from './Component/Services/Services';
import Navbar from '../src/Component/Shared/Navbar'
import Contact from '../src/Component/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Component/Home/Home';
import NotFound from './Component/Shared/NotFound';
import Projects from './Component/Projects/Projects';
import AllProjects from './Component/Projects/AllProjects';
import MernProjects from './Component/Projects/MernProjects';
import ReactProjects from './Component/Projects/ReactProjects';
import JavascriptProjects from './Component/Projects/JavascriptProjects';
import OthersP from './Component/Projects/OthersP';

function App() {

  return (
    <div className="bg-primary">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>

        {/* Nested routes */}
        <Route path='/projects' element={<Projects />}>
          <Route index element={<AllProjects />} />
          <Route path='mern' element={<MernProjects />} />
          <Route path='react' element={<ReactProjects />} />
          <Route path='javascript' element={<JavascriptProjects />} />
          <Route path='others' element={<OthersP />} />
        </Route>

      </Routes>

      <ToastContainer></ToastContainer>
    </div >
  );
}

export default App;
