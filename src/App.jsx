// src/App.jsx
import AppRoutes from './routes/Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

const App = () => {

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;