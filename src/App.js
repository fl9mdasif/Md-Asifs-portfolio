import Navbar from '../src/Component/Shared/Navbar'
import Contact from '../src/Component/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Component/Home/Home';
import NotFound from './Component/Shared/NotFound';
import { Portfolio } from './Component/Projects/Portfolio';

function App() {

  return (
    <div className="bg-primary">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='*' element={<NotFound />}></Route>

        {/* 
        <Route path='/projects' element={<Projects />}>
          <Route index element={<AllProjects />} />
          <Route path='mern' element={<MernProjects />} />
          <Route path='react' element={<ReactProjects />} />
          <Route path='javascript' element={<JavascriptProjects />} />
          <Route path='others' element={<OthersP />} />
        </Route> */}

      </Routes>

      <ToastContainer></ToastContainer>
    </div >
  );
}

export default App;
