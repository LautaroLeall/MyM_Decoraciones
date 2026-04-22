// src/App.jsx
import AppRoutes from './routes/Routes';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <ScrollToTop />
      <AppRoutes />
    </div>
  );
};

export default App;