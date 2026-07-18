import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home.js'; // Importa el componente Home desde su archivo correspondiente
import ProductsList from './pages/products/ProductList/ProductList.js'; // Importa el componente ProductsList
import ProductView from './pages/products/productsView/ProductView.js'; // Importa el componente ProductView

// --- COMPONENTES VISTA PROVISORIOS---
const ProductForm = () => <div className="contenedor"><h2>➕ Módulo: Registrar/Modificar Producto</h2><p>Formulario de carga de datos.</p></div>;
const ProfileView = () => <div className="contenedor"><h2>👤 Perfil de Usuario</h2><p>Datos de la cuenta de administración.</p></div>;
const NotFound = () => <div className="contenedor"><h2>🚨 Error 404 - Página No Encontrada</h2><p>La ruta solicitada no existe o está en desarrollo.</p></div>;


// --- COMPONENTE PRINCIPAL APP ---
function App() {

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      <div className="app-layout">
        
        {/* Menu lateral */}
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <Link to="/" onClick={() => setIsSidebarOpen(false)}>
              <img src="/img/logo.jpeg" alt="Logo" className="logo-img"/>
            </Link>
            {/* Boton para cerrar el menu*/}
            <button className="close-btn d-mobile" onClick={toggleSidebar}>✖</button>
          </div>

          <nav className="sidebar-nav">
            <Link to="/" onClick={() => setIsSidebarOpen(false)}>🏠 Inicio</Link>
            <Link to="/products" onClick={() => setIsSidebarOpen(false)}>📦 Productos</Link>
            <Link to="/products/new" onClick={() => setIsSidebarOpen(false)}>➕ Añadir Producto</Link>
          </nav>
          
          <div className="sidebar-footer">
            <Link to="/profile" onClick={() => setIsSidebarOpen(false)} className="perfil-link">
              <img src="/img/usuario.png" alt="Usuario" className="icono-perfil" />
              <span>Mi Perfil</span>
            </Link>
          </div>
        </aside>

        {/* MAIN AREA (Área Principal) */}
        <main className="main-area">

          {/* HEADER DEL MAIN AREA (User Story #4) */}
          <header className="main-header">
            <button className="menu-btn d-mobile" onClick={toggleSidebar}>☰</button>
            <h2 className="header-title">Panel de Gestión</h2>
            {/* Aquí a futuro podrías poner el buscador o el carrito */}
          </header>

          {/* Contenido dinámico de las rutas */}
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsList />} />
              <Route path="/products/new" element={<ProductForm />} />
              <Route path="/products/:id" element={<ProductView />} />
              <Route path="/profile" element={<ProfileView />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>

      </div>
    </Router>
  );
}

export default App;
