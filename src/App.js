import { Routes, Route } from 'react-router-dom';
import LoginPage from './Components/User/LoginPage';
import Profile from './Components/Profile/Profile';
import ServiceInfo from './Components/BikeServiceInfo/ServiceInfo';
import Users from './Components/User/Users';
import UserForm from './Components/User/UserForm';
import { Bike, ChooseNewOrUsed, NewBike } from './Components/Bike/Bike';
import MyBikes from './Components/Bike/MyBikes';
import BikeForm from './Components/Bike/BikeForm'
import News from './Components/PageComponents/News';
import Service from './Components/BikeService/Service';
import Insurance from './Components/Bike/Insurance';
import Tours from './Components/Tour/Tours';
import Webshop from './Components/Webshop/Webshop';
import ShoppingCart from './Components/Webshop/ShoppingCart';
import Success from './Components/ActionResponse/Success';
import Error from './Components/ActionResponse/Error';
import Registration from './Components/User/Registration';
import RegisterPersonByAdmin from './Components/Admin/RegisterPersonByAdmin';
import RegisterAdminByAdmin from './Components/Admin/RegisterAdminByAdmin';
import RegisterColleagueByAdmin from './Components/Admin/RegisterColleagueByAdmin';
import RegisterUserByAdmin from './Components/Admin/RegisterUserByAdmin';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';
import { useState } from 'react';

function App() {
  const [defValue, setDefValue] = useState("Choose...");
  return (
    <div>
      <Routes>
        <Route path='/' element={<ServiceInfo/>}/>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/news" element={<News />} />
        <Route path="/service" element={<Service defValue={defValue}/>} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/cart" element={<ShoppingCart />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/users" element={<Users />} />
        <Route path="/profile/user-form" element={<UserForm />} />
        <Route path="/profile/bikes" element={<MyBikes setDefValue={setDefValue}/>} />
        <Route path="/profile/bike-form" element={<BikeForm />} />
        <Route path="/profile/tours" element={<Tours />} />
        <Route path="/profile/appointments" element={<Profile />} />
        <Route path="/logout" element={<LoginPage />} />

        <Route path="/webshop" element={<Webshop />} />
        <Route path="/webshop/bikes" element={<ChooseNewOrUsed />} />
        <Route path="/webshop/bikes/new" element={<NewBike />} />
        <Route path="/webshop/bikes/used" element={<Bike />} />
        <Route path="/webshop/parts" element={<Webshop />} />
        <Route path="/webshop/tools" element={<Webshop />} />
        <Route path="/webshop/accessories" element={<Webshop />} />

        <Route path="/admin/registerperson" element={<RegisterPersonByAdmin />} />
        <Route path="/admin/registeruser" element={<RegisterUserByAdmin />} />
        <Route path="/admin/registercolleague" element={<RegisterColleagueByAdmin />} />
        <Route path="/admin/registeradmin" element={<RegisterAdminByAdmin />} />

        <Route path="/*" element={<Error message="Page not found" />} />
        <Route path="/error" element={<Error message="An error occurred. Please try again." />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;