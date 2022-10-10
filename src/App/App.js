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
import StormDamageView from '../Views/StormDamageView/StormDamageView';
import TestimonialView from '../Views/TestimonialView/TestimonialView';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='about' element={<AboutView />} />
        <Route path='roofing' element={<RoofingView />} />
        <Route path='stucco' element={<StuccoView />} />
        <Route path='ice-dams' element={<IceDamsView />} />
        <Route path='contact' element={<ContactView />} />
        <Route path='storm-damage' element={<StormDamageView />} />
        <Route path='testimonials/:key' element={<TestimonialView />} />

        <Route path='*' element={<NoMatchView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
