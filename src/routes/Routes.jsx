import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "../page/Home";
import PaquetesPage from "../page/Paquetes";
import PaqDetallePage from "../page/PaqueteId";
import ComplementosPage from "../page/Complementos";
import ContratacionPage from "../page/Contratacion";
import NotFound from "../page/NotFound";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/paquetes" element={<PaquetesPage />} />
        <Route path="/paquete/:id" element={<PaqDetallePage />} />
        <Route path="/complementos" element={<ComplementosPage />} />
        <Route path="/contratacion" element={<ContratacionPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;