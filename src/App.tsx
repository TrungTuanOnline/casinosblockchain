import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Casinos from './pages/Dashboard/Casinos';
import Guide1 from './pages/Guides/Guide1';
import Guide2 from './pages/Guides/Guide2';
import Guide3 from './pages/Guides/Guide3';
import Providers from './pages/Providers';

// review pages start
import BCGameReview from './pages/Reviews/BCGameReview';
import StakeCasinoReview from './pages/Reviews/StakeCasinoReview';
import RocketpotGameReview from './pages/Reviews/RocketpotGameReview';
// review pages end

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Casinos />} />
        <Route path='/game-providers' element={<Providers />} />
        <Route path='/best-bitcoin-wallet-for-online-gambling' element={<Guide1 />} />
        <Route path='/stablecoin-casinos' element={<Guide2 />} />
        <Route path='/metamask-casinos' element={<Guide3 />} />

        {/* review pages start */}
        <Route path='/review/bc.game' element={<BCGameReview />} />
        <Route path='/review/stake.com' element={<StakeCasinoReview />} />
        <Route path='/review/rocketpot.io' element={<RocketpotGameReview />} />
        {/* review pages end */}
      </Routes>
      <ToastContainer style={{ fontSize: '16px' }} theme='dark' />
    </div>
  );
}

export default App;