import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Casinos from './pages/Dashboard/Casinos';
import Guide1 from './pages/Guides/Guide1';
import Providers from './pages/Providers';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Casinos />} />
        <Route path='/game-providers' element={<Providers />} />
        <Route path='/best-bitcoin-wallet-for-online-gambling' element={<Guide1 />} />
      </Routes>
      <ToastContainer style={{ fontSize: '16px' }} theme='dark' />
    </div>
  );
}

export default App;