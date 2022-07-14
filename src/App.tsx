import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Casinos from './pages/Dashboard/Casinos';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Casinos />} />
      </Routes>
      <ToastContainer style={{ fontSize: '16px' }} theme='dark' />
    </div>
  );
}

export default App;
