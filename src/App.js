import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import {Bike, ChooseNewOrUsed, NewBike} from './Components/Bike';
import Webshop from './Components/Webshop';
import {BikeNews} from './Components/BikeNews';
import {Insurance} from './Components/Insurance';
import {Profile} from './Components/Profile';
import {ShoppingCart} from './Components/ShoppingCart';
import {Tours} from './Components/Tours';
import {Service} from './Components/Service';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/webshop/bikes" element={<ChooseNewOrUsed/>}/>
        <Route path="/webshop/bikes/new" element={<NewBike/>}/>
        <Route path="/webshop/bikes/used" element={<Bike/>}/>
        <Route path="/webshop" element={<Webshop/>}/>
        <Route path="/webshop/parts" element={<Webshop/>}/>
        <Route path="/webshop/tools" element={<Webshop/>}/>
        <Route path="/webshop/accessories" element={<Webshop/>}/>
        <Route path="/news" element={<BikeNews/>}/>
        <Route path="/insurance" element={<Insurance/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cart" element={<ShoppingCart/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
    </div>
  );
}

export default App;
