    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import "../styles/NavBar.css";

    const NavBar = () => {
        const [menuOpen, setMenuOpen] = useState(false);

        return (
            <nav className="navbar" style={{ width: "100%", left: 0 }}>
                <div className="navbar__logo">
                    <Link to="/">
                        <img src="/vite.svg" alt="CapyDo Logo"
    className="navbar__icon" />
                        <span>CapyDo</span>
                    </Link>
                </div>

                <button
                    className="navbar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>
                    <li><Link to="/dashboard">Inicio</Link></li>
                    <li><Link to="/projects">Proyectos</Link></li>
                    <li><Link to="/calendar">Calendario</Link></li>
                    <li><Link to="/profile">Perfil</Link></li>
                </ul>
            </nav>
        );
    };

    export default NavBar;
