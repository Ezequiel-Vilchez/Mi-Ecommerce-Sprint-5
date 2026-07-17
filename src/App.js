import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  const sugeridos = []; 
  const topProducts = [
    { id: 19, nombre: "Camiseta Oficial Especial", precio: "159.999", imagen: "" }
  ];

  return (
    <main className="contenedor">
      {/* Sección de Sugeridos */}
      <h2 className="Titulos1">Te puede interesar</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginBottom: '30px', width: '100%' }}>
        {sugeridos.length > 0 ? (
          sugeridos.map(producto => (
            <Link key={producto.id} className="link" to={`/products/${producto.id}`}>
              <section className="tarjeta">
                <h2>{producto.nombre}</h2>
                <ul>
                  <img 
                    src={producto.imagen ? producto.imagen : 'https://placehold.co/300x300?text=Sin+Imagen'} 
                    alt={producto.nombre} 
                  />
                  <li>$ {producto.precio}</li>
                  <li>Los productos personalizados no están sujetos a cambios y/o devoluciones.</li>
                </ul>
              </section>
            </Link>
          ))
        ) : (
          <p style={{ color: '#666' }}>No hay sugerencias en este momento.</p>
        )}
      </div>

      <h2 className="Titulos1">Camisetas</h2>
      <Link className="link" to="/products/1">
        <section className="tarjeta">
          <h2>Camiseta de Boca Juniors</h2>
          <ul>
            <img src="/img/boquita.jpg" alt="Boca" />
            <li>$ 149.999</li>
            <li>Los productos personalizados no están sujetos a cambios y/o devoluciones.</li>
          </ul>
        </section>
      </Link>

      <Link className="link" to="/products/2">
        <section className="tarjeta">
          <h2>Camiseta de River Plate</h2>
          <img src="/img/river.jpg" alt="River" />
          <li>$ 149.999</li>
          <li>Los productos personalizados no están sujetos a cambios y/o devoluciones.</li>
        </section>
      </Link>

      <Link className="link" to="/products/3">
        <section className="tarjeta">
          <h2>Camiseta de la Seleccion Argentina</h2>
          <ul>
            <img src="/img/seleccion.jpg" alt="Argentina" />
            <li>$ 149.999</li>
            <li>Los productos personalizados no están sujetos a cambios y/o devoluciones.</li>
          </ul>
        </section>
      </Link>

      <h2 className="Titulos1">Botines</h2>
      <section className="tarjeta">
        <Link className="link" to="/products/7">
          <h2>Zona de envío gratis</h2>
          <img src="/img/botin1.jpg" alt="Botines" />
          <p>Compra ahora</p>
          <li>$ 149.999</li>
          <li>Los productos personalizados no están sujetos a cambios y/o devoluciones.</li>
        </Link>
      </section>

      {/* Los más pedidos */}
      <h2 className="Titulos1">Los más pedidos</h2>
      {topProducts.map(producto => (
        <Link key={producto.id} className="link" to={`/products/${producto.id}`}>
          <section className="tarjeta">
            <h2>{producto.nombre}</h2>
            <ul>
              <img 
                src={producto.imagen ? producto.imagen : '/img/default-fallback.png'} 
                alt={producto.nombre} 
              />
              <li>$ {producto.precio}</li>
              <li>Los productos personalizados no están sujetos a cambios y/o devoluciones.</li>
            </ul>
          </section>
        </Link>
      ))}
    </main>
  );
}

// --- COMPONENTES VISTA PROVISORIOS---
const ProductsList = () => <div className="contenedor"><h2>📦 Módulo: Lista General de Productos</h2><p>Aquí se gestionará el inventario.</p></div>;
const ProductView = () => <div className="contenedor"><h2>👁️ Módulo: Vista Detallada del Producto</h2><p>Viendo el ID seleccionado.</p></div>;
const ProductForm = () => <div className="contenedor"><h2>➕ Módulo: Registrar/Modificar Producto</h2><p>Formulario de carga de datos.</p></div>;
const ProfileView = () => <div className="contenedor"><h2>👤 Perfil de Usuario</h2><p>Datos de la cuenta de administración.</p></div>;
const NotFound = () => <div className="contenedor"><h2>🚨 Error 404 - Página No Encontrada</h2><p>La ruta solicitada no existe o está en desarrollo.</p></div>;


// --- COMPONENTE PRINCIPAL APP ---
function App() {
  return (
    <Router>
      <div className="App">
        
        {/* HEADER / NAVBAR (Se mantiene fijo en todas las rutas) */}
        <header className="nave">
          <div className="centro">
            <div className="logo">
              {/* Al hacer clic en el logo, volvemos al inicio */}
              <Link to="/"><img src="/img/logo.jpeg" alt="logo" /></Link>
            </div>

            <div className="barra">
              <form className="barra" onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="query" placeholder="Buscar productos..." required />
              </form>
            </div>
          </div>

          {/* Menú de accesos rápidos del Dashboard solicitado */}
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Productos</Link>
            <Link to="/products/new" style={{ color: 'white', textDecoration: 'none' }}>+ Añadir</Link>
          </div>

          <div className="iconos">
            <div className="icono">
              <Link to="/profile">
                <button className="boton">
                  <img src="/img/usuario.png" width="30px" height="30px" alt="Usuario" />
                </button>
              </Link>
            </div>
          </div>
        </header>

        {/* CONTENEDOR ENRUTADOR: Cambia dinámicamente según la URL */}
        <Routes>
          {/* 🏠 / -> Muestra tu catálogo */}
          <Route path="/" element={<Home />} />
          
          {/* 📦 /products -> Lista de productos */}
          <Route path="/products" element={<ProductsList />} />
          
          {/* 📦 /products/new -> Crear nuevo */}
          <Route path="/products/new" element={<ProductForm />} />
          
          {/* 📦 /products/:id -> Ver detalle (rutas dinámicas) */}
          <Route path="/products/:id" element={<ProductView />} />
          
          {/* 👤 /profile -> Perfil actual */}
          <Route path="/profile" element={<ProfileView />} />
          
          {/* 🚨 * -> Cualquier ruta inválida cae en el 404 solicitado */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* FOOTER (Se mantiene fijo abajo) */}
        <footer className="footer-simple">
          <p>&copy; 2026 Mi Ecommerce - Panel de Gestión</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;
