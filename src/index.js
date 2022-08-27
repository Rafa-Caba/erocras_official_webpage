import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaIndex from './components/admin/PaginaIndex';
import PaginaMiembros from './components/PaginaMiembros';
import PaginaMisa from './components/PaginaMisa';
import PaginaNosotros from './components/PaginaNosotros';
import PaginaContacto from './components/PaginaContacto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        { /* Rutas publicas de EroCras Page */ }
        <Route path="/" element={<App />} />
        <Route path="/miembros" element={<PaginaMiembros />} />
        <Route path="/misa_erocras" element={<PaginaMisa />} />
        <Route path="/nosotros" element={<PaginaNosotros />} />
        <Route path="/contacto" element={<PaginaContacto />} />

        { /* Rutas que seran Privadas del Panel de Control */ }
        <Route path="/admin" element={<PaginaIndex />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);