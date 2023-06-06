import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Profile from './Components/Profile/Profile';
import User from './Components/User/User';
import Users from './Components/User/Users';
import { Bike, ChooseNewOrUsed, NewBike } from './Components/Bike/Bike';
import MyBikes from './Components/Bike/MyBikes';
import BikeForm from './Components/Bike/BikeForm'
import News from './Components/PageComponents/News';
import Service from './Components/Service/Service';
import Insurance from './Components/Bike/Insurance';
import Tours from './Components/Tour/Tours';
import Webshop from './Components/Webshop/Webshop';
import ShoppingCart from './Components/Webshop/ShoppingCart';
import Success from './Components/ActionResponse/Success';
import Error from './Components/ActionResponse/Error';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/service" element={<Service />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/users" element={<Users />} />
        <Route path="/profile/bikes" element={<MyBikes />} />
        <Route path="/profile/bike-form" element={<BikeForm />} />
        <Route path="/profile/tours" element={<Tours />} />
        <Route path="/profile/appointments" element={<Profile />} />
        <Route path="/logout" element={<LandingPage />} />
        <Route path="/webshop" element={<Webshop />} />
        <Route path="/webshop/bikes" element={<ChooseNewOrUsed />} />
        <Route path="/webshop/bikes/new" element={<NewBike />} />
        <Route path="/webshop/bikes/used" element={<Bike />} />
        <Route path="/webshop/parts" element={<Webshop />} />
        <Route path="/webshop/tools" element={<Webshop />} />
        <Route path="/webshop/accessories" element={<Webshop />} />
        <Route path="/*" element={<Error message="Page not found" />} />
        <Route path="/error" element={<Error message="An error occurred. Please try again." />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;