import Services from './Component/Services/Services';
import Navbar from '../src/Component/Shared/Navbar'
// import Hero from './Component/Hero/Hero';
import Contact from '../src/Component/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="bg-primary">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
