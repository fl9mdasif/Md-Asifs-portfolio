import Services from './Component/Services/Services';
import Navbar from '../src/Component/Shared/Navbar'
import Home1 from './Component/Hero/Home1';
import Contact from '../src/Component/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home1 />}></Route>
        <Route path='/home' element={<Home1 />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
