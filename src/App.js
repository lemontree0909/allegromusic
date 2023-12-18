import React from "react";
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Academy from "./Academy";
import ContactUs from "./ContactUs";

import './App.css';
import { useTranslation } from "react-i18next";

function App() {

  const { i18n, t } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return <Router>
    <nav>
      <Link to ="/" className="link">ALLEGRO</Link>
      <Link to ="/shop" className="link">{t('Shop')}</Link>
      <Link to ="/academy" className="link">{t('Allegro Academy')}</Link>
      <Link to ="/contact" className="link">{t('Contact Us')}</Link>

      <button className="btn-home" onClick={toggleLang}>
        {i18n.language === 'en' ? 'RU' : 'EN'}
      </button>
      
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/academy" element={<Academy/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>

  </Router>
}

export default App;
