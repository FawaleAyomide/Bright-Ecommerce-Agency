import { Routes, Route } from 'react-router-dom';
import HomePage from '../Components/HomePage';

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
    </Routes>
  )
}

export default Pages