import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Features from './Pages/Features';
import FreeQuote from './Pages/FreeQuote';
import Home from './Pages/Home';

import OurServices from './Pages/OurServices';
import OurTeam from './Pages/OurTeam';
import Page404 from './Pages/Page404';
import Pages from './Pages/Pages';
import Testimonial from './Pages/Testimonial';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about/' element={<AboutUs />}></Route>
          <Route path='contact/' element={<ContactUs />}></Route>
          <Route path='Features/' element={<Features />}></Route>
          <Route path='FreeQuote/' element={<FreeQuote />}></Route>
          <Route path='OurServices/' element={<OurServices />}></Route>
          <Route path='OurTeam/' element={<OurTeam />}></Route>
          <Route path='Page404/' element={<Page404 />}></Route>
          <Route path='Pages/' element={<Pages />}></Route>
          <Route path='Testimonial/' element={<Testimonial />}></Route>
          <Route path='Login/' element={<Login />}></Route>
          <Route path='Register/' element={<Register />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
