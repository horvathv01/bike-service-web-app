import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import LandingPage from './LandingPage';
import {Bike, ChooseNewOrUsed, NewBike} from './Components/Bike';
import Webshop from './Components/Webshop';
import BikeNews from './Components/BikeNews';
import Insurance from './Components/Insurance';
import Profile from './Components/Profile';
import ShoppingCart from './Components/ShoppingCart';
import Tours from './Components/Tours';
import Service from './Components/Service';
import BikeForm from './Components/BikeForm'
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage Header={Header}/>}/>
        <Route path="/webshop/bikes" element={<ChooseNewOrUsed Header={Header}/>}/>
        <Route path="/webshop/bikes/new" element={<NewBike Header={Header}/>}/>
        <Route path="/webshop/bikes/used" element={<Bike Header={Header}/>}/>
        <Route path="/webshop" element={<Webshop Header={Header}/>}/>
        <Route path="/webshop/parts" element={<Webshop Header={Header}/>}/>
        <Route path="/webshop/tools" element={<Webshop Header={Header}/>}/>
        <Route path="/webshop/accessories" element={<Webshop Header={Header}/>}/>
        <Route path="/news" element={<BikeNews Header={Header}/>}/>
        <Route path="/insurance" element={<Insurance Header={Header}/>}/>
        <Route path="/profile" element={<Profile Header={Header}/>}/>
        <Route path="/cart" element={<ShoppingCart Header={Header}/>}/>
        <Route path="/tours" element={<Tours Header={Header}/>}/>
        <Route path="/service" element={<Service Header={Header}/>}/>
        <Route path="/bike-form" element={<BikeForm Header={Header}/>} />
      </Routes>
    </div>
  );
}

export default App;
