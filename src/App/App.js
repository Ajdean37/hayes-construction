import './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from '../Views/HomeView/HomeView';
import AboutView from '../Views/AboutView/AboutView';
import NoMatchView from '../Views/NoMatchView/NoMatchView';
import Navbar from '../Navbar/Navbar';
import RoofingView from '../Views/RoofingView/RoofingView';
import StuccoView from '../Views/StuccoView/StuccoView';
import IceDamsView from '../Views/IceDamsView/IceDamsView';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='About' element={<AboutView />} />
        <Route path='Roofing' element={<RoofingView />} />
        <Route path='Stucco' element={<StuccoView />} />
        <Route path='IceDams' element={<IceDamsView />} />
        <Route path='*' element={<NoMatchView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
