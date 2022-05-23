import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
const Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header"></div>
                <ul className="nav-links">
                    <li>
                        <a href="/" className="underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/pokemons" className="underline">
                            Pokemons
                        </a>
                    </li>
                    <li>
                        <a href="/berries" className="underline">
                            Berries
                        </a>
                    </li>
                    {/* <li>
                        <a href="/locations" className="underline">
                            Locations
                        </a>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
