// src/routes/routes.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../page/Home";
import PaquetesPage from "../page/Paquetes";
import PaqDetallePage from "../page/DetallesPaq";
import ComplementosPage from "../page/Complementos";
import ContratacionPage from "../page/Contratacion";
import NotFound from "../page/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/paquetes" element={<PaquetesPage />} />
            <Route path="/paquete/:id" element={<PaqDetallePage />} />
            <Route path="/complementos" element={<ComplementosPage />} />
            <Route path="/contratacion" element={<ContratacionPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;