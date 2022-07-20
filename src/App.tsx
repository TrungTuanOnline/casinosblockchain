import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// First Page
import Casinos from './pages/Dashboard/Casinos';

// Games
import Crash from './pages/Games/Crash';
import Jackpots from './pages/Games/Jackpots';
import Slots from './pages/Games/Slots';
import Roulette from './pages/Games/Roulette';
import Blackjack from './pages/Games/Blackjack';
import Dice from './pages/Games/Dice';
import Plinko from './pages/Games/Plinko';
import Poker from './pages/Games/Poker';

// Providers
import Providers from './pages/Providers';

// Guides
import Guide1 from './pages/Guides/Guide1';
import Guide2 from './pages/Guides/Guide2';
import Guide3 from './pages/Guides/Guide3';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Casinos />} />

        <Route path='/crash-crypto-game' element={<Crash />} />
        <Route path='/bitcoin-jackpot' element={<Jackpots />} />
        <Route path='/slots-bitcoin-casino' element={<Slots />} />
        <Route path='/roulette-bitcoin-casino' element={<Roulette />} />
        <Route path='/blackjack-bitcoin-casino' element={<Blackjack />} />
        <Route path='/dice-bitcoin-casino' element={<Dice />} />
        <Route path='/plinko-casino' element={<Plinko />} />
        <Route path='/bitcoin-poker-sites' element={<Poker />} />

        <Route path='/game-providers' element={<Providers />} />

        <Route path='/best-bitcoin-wallet-for-online-gambling' element={<Guide1 />} />
        <Route path='/stablecoin-casinos' element={<Guide2 />} />
        <Route path='/metamask-casinos' element={<Guide3 />} />
      </Routes>
      <ToastContainer style={{ fontSize: '16px' }} theme='dark' />
    </div>
  );
}

export default App;