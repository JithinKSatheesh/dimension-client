
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Notfound from './Pages/NotFound';

// ** Services Page
import Investmentsecurity from 'Pages/Services/InvestmentSecurity';
import AssetManagement from 'Pages/Services/AssetManagement';
import Capitalmarket from 'Pages/Services/CapitalMarket';

// **
import InvestorRelations from 'Pages/InvestorRelations'
import ClientRights from  'Pages/ClientRights'
import Regulations from 'Pages/Regulations'
import FAQ from 'Pages/FAQ'
import News from 'Pages/News';
import Article from 'Pages/Article'
import MarketResearch from 'Pages/MarketResearch'
import Careers from 'Pages/Careers'
import Protfolio from 'Pages/Protfolio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="services/investment-security" element={ <Investmentsecurity/> } />
        <Route path="services/asset-management" element={ <AssetManagement/> } />
        <Route path="services/capital-market" element={ <Capitalmarket/> } />
        <Route path="investor-relation" element={ <InvestorRelations/> } />
        <Route path="client-rights" element={ <ClientRights/> } />
        <Route path="regulations" element={ <Regulations/> } />
        <Route path="faq" element={ <FAQ/> } />
        <Route path="news" element={ <News/> } />
        <Route path="article" element={ <Article/> } />
        <Route path="market-research" element={ <MarketResearch/> } />
        <Route path="careers" element={ <Careers/> } />
        <Route path="protfolio" element={ <Protfolio/> } />

        <Route path="*" element={ <Notfound/> } />
      </Routes>
    </div>
  );
}

export default App;

