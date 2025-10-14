import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import SEO from '../components/SEO';
import MobileOverlay from '../components/MobileOverlay';
function Root() {
  return (
    <div>
      <Preloader />
      <Header />
      <MobileOverlay />
      <SEO />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;