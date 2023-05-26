import { Routes, Route } from 'react-router-dom';
import serverConnection from './Components/ServerConnection';
import Header from './Components/Header';
import LandingPage from './LandingPage';
import Profile from './Components/Profile';
import { Bike, ChooseNewOrUsed, NewBike } from './Components/Bike/Bike';
import MyBikes from './Components/MyBikes';
import BikeDisplay from './Components/Bike/BikeDisplay';
import BikeForm from './Components/Bike/BikeForm'
import BikeNews from './Components/BikeNews';
import Service from './Components/Service/Service';
import Insurance from './Components/Insurance';
import Tours from './Components/Tour/Tours';
import Webshop from './Components/Webshop/Webshop';
import ShoppingCart from './Components/Webshop/ShoppingCart';
import Success from './Components/Success';
import Error from './Components/Error';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage Header={Header} serverConnection={serverConnection} />} />
        <Route path="/news" element={<BikeNews Header={Header} />} />
        <Route path="/logout" element={<LandingPage Header={Header} />} />
        <Route path="/insurance" element={<Insurance Header={Header} />} />
        <Route path="/tours" element={<Tours Header={Header} />} />
        <Route path="/service" element={<Service Header={Header} />} />
        <Route path="/profile" element={<Profile Header={Header} />} />
        <Route path="/profile/bikes" element={<MyBikes />} />
        <Route path="/profile/bike-form" element={<BikeForm Header={Header} />} />
        <Route path="/profile/appointments" element={<Profile Header={Header} />} />
        <Route path="/profile/tours" element={<Profile Header={Header} />} />
        <Route path="/webshop/bikes" element={<ChooseNewOrUsed Header={Header} />} />
        <Route path="/webshop/bikes/new" element={<NewBike Header={Header} />} />
        <Route path="/webshop/bikes/used" element={<Bike Header={Header} BikeListDisplay={BikeDisplay} />} />
        <Route path="/webshop" element={<Webshop Header={Header} />} />
        <Route path="/webshop/parts" element={<Webshop Header={Header} />} />
        <Route path="/webshop/tools" element={<Webshop Header={Header} />} />
        <Route path="/webshop/accessories" element={<Webshop Header={Header} />} />
        <Route path="/webshop/cart" element={<ShoppingCart Header={Header} />} />
        <Route path="/*" element={<Error message="Page not found" />} />
        <Route path="/error" element={<Error message="An error occurred. Please try again." />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;