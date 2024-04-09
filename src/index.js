import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import Destinations from './screens/Destinations';
import ToursScreen from './screens/ToursScreen';
import Contact from './screens/Contact';
import DestinationDetail from './screens/DestinationDetail';
import ToursDetail from './screens/ToursDetail';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/destinations' element= {<Destinations />} />
      <Route path='/destinations' element= {<Destinations />} />
      <Route path='/tours' element={<ToursScreen />} />
      <Route path='/tour/:id' element={<ToursDetail />} />
      <Route path='/contact' element= {<Contact />} />
      <Route path='/destination/:id' element={<DestinationDetail />} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
