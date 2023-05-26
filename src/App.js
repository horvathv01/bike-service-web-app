import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import LandingPage from './LandingPage';
import Error from './Components/Error';
import Success from './Components/Success';
import { Bike, ChooseNewOrUsed, NewBike } from './Components/Bike';
import Webshop from './Components/Webshop';
import BikeNews from './Components/BikeNews';
import Insurance from './Components/Insurance';
import Profile from './Components/Profile';
import ShoppingCart from './Components/ShoppingCart';
import Tours from './Components/Tours';
import Service from './Components/Service';
import BikeForm from './Components/BikeForm'
import serverConnection from './Components/ServerConnection';
import BikeListDisplay from './Components/BikeListDisplay';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage Header={Header} serverConnection={serverConnection} />} />
        <Route path="/webshop/bikes" element={<ChooseNewOrUsed Header={Header} />} />
        <Route path="/webshop/bikes/new" element={<NewBike Header={Header} />} />
        <Route path="/webshop/bikes/used" element={<Bike Header={Header} BikeListDisplay={BikeListDisplay} />} />
        <Route path="/webshop" element={<Webshop Header={Header} />} />
        <Route path="/webshop/parts" element={<Webshop Header={Header} />} />
        <Route path="/webshop/tools" element={<Webshop Header={Header} />} />
        <Route path="/webshop/accessories" element={<Webshop Header={Header} />} />
        <Route path="/news" element={<BikeNews Header={Header} />} />
        <Route path="/insurance" element={<Insurance Header={Header} />} />
        <Route path="/profile" element={<Profile Header={Header} />} />
        <Route path="/profile/bikes" element={<Profile Header={Header} />} />
        <Route path="/profile/tours" element={<Profile Header={Header} />} />
        <Route path="/profile/appointments" element={<Profile Header={Header} />} />
        <Route path="/logout" element={<LandingPage Header={Header} />} />
        <Route path="/cart" element={<ShoppingCart Header={Header} />} />
        <Route path="/tours" element={<Tours Header={Header} />} />
        <Route path="/service" element={<Service Header={Header} />} />
        <Route path="/bike-form" element={<BikeForm Header={Header} />} />
        <Route path="/*" element={<Error message="Page not found" />} />
        <Route path="/error" element={<Error message="An error occurred. Please try again." />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;