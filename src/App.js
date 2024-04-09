import logo from './assets/logo.png';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet, useLocation } from "react-router-dom";
import Footer from './components/Footer';

// Import Swiper styles

function App() {

  const location = useLocation();
  const { pathname } = location;
  const isHome = pathname === '/' || pathname.startsWith('/tour/');
  console.log(location.pathname)
  console.log(isHome)
  useEffect(() => {
    // Reset scroll position on component mount (when App component mounts)
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Header isHome={isHome}  />
    <Outlet />
    <Footer />
    </>
  );
}

export default App;
