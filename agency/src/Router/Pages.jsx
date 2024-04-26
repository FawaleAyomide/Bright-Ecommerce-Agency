import { Routes, Route } from 'react-router-dom';
import HomePage from '../Components/HomePage';
import Pricing from '../Components/Pricing';
import Service from '../Components/Service';
import About from '../Components/About';
import Contact from '../Components/Contact';

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default Pages