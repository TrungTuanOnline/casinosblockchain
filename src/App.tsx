import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// First Page
import Casinos from './pages/Dashboard/Casinos';

import BitcoinFaucets from './pages/Bonuses/BitcoinFaucets';
import BitcoinFreeSpins from './pages/Bonuses/BitcoinFreeSpins';

// Cryptocurencies
import Bitcoin from './pages/Cryptocurrencies/Bitcoin';
import Ethereum from './pages/Cryptocurrencies/Ethereum';
import Tether from './pages/Cryptocurrencies/Tether';
import Dogecoin from './pages/Cryptocurrencies/Dogecoin';
import Litecoin from './pages/Cryptocurrencies/Litecoin';
import Ripple from './pages/Cryptocurrencies/Ripple';
import Binance from './pages/Cryptocurrencies/Binance';
import Cardano from './pages/Cryptocurrencies/Cardano';

// Games
import Crash from './pages/Games/Crash';
import Jackpots from './pages/Games/Jackpots';
import Slots from './pages/Games/Slots';
import Roulette from './pages/Games/Roulette';
import Blackjack from './pages/Games/Blackjack';
import Dice from './pages/Games/Dice';
import Plinko from './pages/Games/Plinko';
import Poker from './pages/Games/Poker';
import Baccarat from './pages/Games/Baccarat';
import Keno from './pages/Games/Keno';
import SportsBetting from './pages/Games/SportsBetting';
import LiveCasino from './pages/Games/LiveCasino';
import Lottery from "./pages/Games/Lottery"
import Sicbo from './pages/Games/Sicbo';



// Providers
import Providers from './pages/Providers';

// Guides
import Guide1 from './pages/Guides/Guide1';
import Guide2 from './pages/Guides/Guide2';
import Guide3 from './pages/Guides/Guide3';

// review pages start
import BCGameReview from './pages/Reviews/BCGameReview';
import StakeCasinoReview from './pages/Reviews/StakeCasinoReview';
import RocketpotGameReview from './pages/Reviews/RocketpotGameReview';
import CloudbetGameReview from './pages/Reviews/CloudbetGameReview';
import TrueFlipGameReview from './pages/Reviews/TrueFlipGameReview';
import BitcoinComGameReview from './pages/Reviews/BitcoinComGameReview';
import BitStarzGameReview from './pages/Reviews/BitStarzGameReview';
import KingBillyGameReview from './pages/Reviews/KingBillyGameReview';
import MBitGameReview from './pages/Reviews/MBitGameReview';
import EarnBetGameReview from './pages/Reviews/EarnBetGameReview';
import ThunderpickGameReview from './pages/Reviews/ThunderpickGameReview';
import BodogGameReview from './pages/Reviews/BodogGameReview';
import BaoCasinoGameReview from './pages/Reviews/BaoCasinoGameReview';
import FortuneJackGameReview from './pages/Reviews/FortuneJackGameReview';
import PrimediceGameReview from './pages/Reviews/PrimediceGameReview';
import BetFuryGameReview from './pages/Reviews/BetFuryGameReview';
import DuckDiceGameReview from './pages/Reviews/DuckDiceGameReview';
import RoobetGameReview from './pages/Reviews/RoobetGameReview';
import BetsGameReview from './pages/Reviews/BetsGameReview';
import BitcasinoGameReview from './pages/Reviews/BitcasinoGameReview';
import BitcoinCasinoGameReview from './pages/Reviews/BitcoinCasinoGameReview';
import OnexSlotsGameReview from './pages/Reviews/1xSlotsGameReview';
import SevenBitCasinoGameReview from './pages/Reviews/7BitCasinoGameReview';
import WinkGameReview from './pages/Reviews/WinkGameReview';
import CryptoWildGameReview from './pages/Reviews/CryptoWildGameReview';
import ZetCasinoGameReview from './pages/Reviews/ZetCasinoGameReview';
import CryptoGamesReview from './pages/Reviews/CryptoGamesReview';
import BetcoinGameReview from './pages/Reviews/BetcoinGameReview';
import OnexBitGameReview from './pages/Reviews/1xBitGameReview';
import BspinCasinoGameReview from './pages/Reviews/BspinCasinoGameReview';
import NitrogenSportsGameReview from './pages/Reviews/NitrogenSportsGameReview';
import CryptoThrillsGameReview from './pages/Reviews/CryptoThrillsGameReview';
import EdgelessCasinoGameReview from './pages/Reviews/EdgelessCasinoGameReview';
// review pages end

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Casinos />} />

        <Route path='/bitcoin-free-spins' element={<BitcoinFreeSpins />} />
        <Route path='/are-bitcoin-faucets-worth-it' element={<BitcoinFaucets />} />

        <Route path='/best-bitcoin-casinos' element={<Bitcoin />} />
        <Route path='/best-ethereum-casinos' element={<Ethereum />} />
        <Route path='/tether-casinos' element={<Tether />} />
        <Route path='/dogecoin-casinos' element={<Dogecoin />} />
        <Route path='/litecoin-casinos' element={<Litecoin />} />
        <Route path='/ripple-casinos' element={<Ripple />} />
        <Route path='/binance-casinos' element={<Binance />} />
        <Route path='/cardano-casinos' element={<Cardano />} />

        <Route path='/crash-crypto-game' element={<Crash />} />
        <Route path='/bitcoin-jackpot' element={<Jackpots />} />
        <Route path='/slots-bitcoin-casino' element={<Slots />} />
        <Route path='/roulette-bitcoin-casino' element={<Roulette />} />
        <Route path='/blackjack-bitcoin-casino' element={<Blackjack />} />
        <Route path='/dice-bitcoin-casino' element={<Dice />} />
        <Route path='/plinko-casino' element={<Plinko />} />
        <Route path='/bitcoin-poker-sites' element={<Poker />} />
        <Route path='/bitcoin-baccarat' element={<Baccarat />} />
        <Route path='/keno-bitcoin' element={<Keno />} />
        <Route path='/bitcoin-sports-betting' element={<SportsBetting />} />
        <Route path='/bitcoin-live-casino' element={<LiveCasino />} />
        <Route path='/lottery-bitcoin-sites' element={<Lottery />} />
        <Route path='/sic-bo-bitcoin' element={<Sicbo />} />


        <Route path='/game-providers' element={<Providers />} />

        <Route path='/best-bitcoin-wallet-for-online-gambling' element={<Guide1 />} />
        <Route path='/stablecoin-casinos' element={<Guide2 />} />
        <Route path='/metamask-casinos' element={<Guide3 />} />

        {/* review pages start */}
        <Route path='/review/bc.game' element={<BCGameReview />} />
        <Route path='/review/stake.com' element={<StakeCasinoReview />} />
        <Route path='/review/rocketpot.io' element={<RocketpotGameReview />} />
        <Route path='/review/cloudbet.com' element={<CloudbetGameReview />} />
        <Route path='/review/trueflip.io' element={<TrueFlipGameReview />} />
        <Route path='/review/games.bitcoin.com' element={<BitcoinComGameReview />} />
        <Route path='/review/bitstarz.com' element={<BitStarzGameReview />} />
        <Route path='/review/kingbillycasino.com' element={<KingBillyGameReview />} />
        <Route path='/review/mbitcasino.com' element={<MBitGameReview />} />
        <Route path='/review/earnbet.io' element={<EarnBetGameReview />} />
        <Route path='/review/thunderpick.com' element={<ThunderpickGameReview />} />
        <Route path='/review/bodog.eu' element={<BodogGameReview />} />
        <Route path='/review/baocasino.com' element={<BaoCasinoGameReview />} />
        <Route path='/review/fortunejack.com' element={<FortuneJackGameReview />} />
        <Route path='/review/primedice.com' element={<PrimediceGameReview />} />
        <Route path='/review/betfury.io' element={<BetFuryGameReview />} />
        <Route path='/review/duckdice.io' element={<DuckDiceGameReview />} />
        <Route path='/review/roobet.com' element={<RoobetGameReview />} />
        <Route path='/review/bets.io' element={<BetsGameReview />} />
        <Route path='/review/bitcasino.io' element={<BitcasinoGameReview />} />
        <Route path='/review/bitcoincasino.io' element={<BitcoinCasinoGameReview />} />
        <Route path='/review/1xslot.com' element={<OnexSlotsGameReview />} />
        <Route path='/review/7bitcasino.com' element={<SevenBitCasinoGameReview />} />
        <Route path='/review/tron.wink.org' element={<WinkGameReview />} />
        <Route path='/review/cryptowild.com' element={<CryptoWildGameReview />} />
        <Route path='/review/zetcasino.com' element={<ZetCasinoGameReview />} />
        <Route path='/review/crypto.games' element={<CryptoGamesReview />} />
        <Route path='/review/betcoin.ag' element={<BetcoinGameReview />} />
        <Route path='/review/1xbit.com' element={<OnexBitGameReview />} />
        <Route path='/review/bspin.io' element={<BspinCasinoGameReview />} />
        <Route path='/review/nitrogensports.eu' element={<NitrogenSportsGameReview />} />
        <Route path='/review/cryptothrills.io' element={<CryptoThrillsGameReview />} />
        <Route path='/review/edgeless.io' element={<EdgelessCasinoGameReview />} />
        {/* review pages end */}
      </Routes>
      <ToastContainer style={{ fontSize: '16px' }} theme='dark' />
    </div>
  );
}

export default App;