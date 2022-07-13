import Services from './Component/Services/Services';
import Navbar from '../src/Component/Shared/Navbar'
import Contact from '../src/Component/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Component/Home/Home';
import NotFound from './Component/Shared/NotFound';

function App() {

  return (
    <div className="bg-primary">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>

      </Routes>

      <ToastContainer></ToastContainer>
    </div >
  );
}

export default App;
