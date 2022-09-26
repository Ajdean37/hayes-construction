import './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from '../Views/HomeView/HomeView';
import AboutView from '../Views/AboutView/AboutView';
import NoMatchView from '../Views/NoMatchView/NoMatchView';
import Navbar from '../Navbar/Navbar';
import RoofingView from '../Views/RoofingView/RoofingView';
import StuccoView from '../Views/StuccoView/StuccoView';
import IceDamsView from '../Views/IceDamsView/IceDamsView';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContactView from '../Views/ContactView/ContactView';
import TestimonialView from '../Views/TestimonialView/TestimonialView';
import StormDamageView from '../Views/StormDamageView/StormDamageView';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='About' element={<AboutView />} />
        <Route path='Roofing' element={<RoofingView />} />
        <Route path='Stucco' element={<StuccoView />} />
        <Route path='IceDams' element={<IceDamsView />} />
        <Route path='Contact' element={<ContactView />} />
        <Route path='StormDamage' element={<StormDamageView />} />
        <Route path='Testimonials' element={<TestimonialView />} />

        <Route path='*' element={<NoMatchView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
