import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import axiosInstance from './utils/axiosInstance';
import { authStore } from './store';

function App() {

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axiosInstance.get('/auth')
        .then((res: any) => {
          authStore.setState({
            isAuthenticated: true,
            user: res.data
          });
        }).catch((err: any) => {
          localStorage.removeItem('token');
          window.location.href = '/login';
        })
    }
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/test' element={<Test />} />
      </Routes>
      <ToastContainer style={{ fontSize: '16px' }} theme='dark' />
    </div>
  );
}

export default App;
