import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const MainMenu = ({ isOpen, toggleSidebar, closeMenu }) => {
    return (
        <>
            
            {isOpen && <div className="overlay" onClick={closeMenu}></div>}

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/" onClick={closeMenu}>
                        <img src="/img/logo.jpeg" alt="Logo" className="logo-img" />
                    </Link>
                    
                    <button className="close-btn d-mobile" onClick={toggleSidebar}>✖</button>
                </div>

                
                <nav className="sidebar-nav">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                        onClick={closeMenu}
                    >
                        🏠 Inicio
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                        onClick={closeMenu}
                    >
                        📦 Productos
                    </NavLink>
                    
                    <NavLink
                        to="/categories"
                        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                        onClick={closeMenu}
                    >
                        🗂️ Categorías
                    </NavLink>
                </nav>

                <div className="sidebar-footer">
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => (isActive ? 'perfil-link active' : 'perfil-link')}
                        onClick={closeMenu}
                    >
                        <img src="/img/usuario.png" alt="Usuario" className="icono-perfil" />
                        <span>Mi Perfil</span>
                    </NavLink>
                </div>
            </aside>
        </>
    );
};

export default MainMenu;