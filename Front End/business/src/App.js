// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./resources/components/pages/About";
import Contact from "./resources/components/pages/Contact";
import FAQ from "./resources/components/pages/FAQ";
import Home from "./resources/components/pages/Home";
import Pricing from "./resources/components/pages/Pricing";
import BlogPost from './resources/components/pages/BlogPost';
import BlogHome from './resources/components/pages/BlogHome';
import PortfolioItems from './resources/components/pages/PortfolioItems';
import PortfolioOverview from './resources/components/pages/PortfolioOverview';



function App() {
  document.getElementsByTagName('title')[0].innerHTML = "Myapp";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blogHome" element={<BlogHome />} />
          <Route path="/blogPost" element={<BlogPost />} />
          <Route path="/portfolio_items" element={<PortfolioItems />} />
          <Route path="/portfolio_overview" element={<PortfolioOverview />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
