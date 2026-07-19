import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


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


export default Home;