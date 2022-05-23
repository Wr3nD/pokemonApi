import React from "react";
import "../css/footer.css";
const Footer = () => {
    return (
        <footer>
            <h5>
                &copy; {new Date().getFullYear()}
                <span> PokeApi</span>
            </h5>
            <h5>All rights reserved</h5>
        </footer>
    );
};

export default Footer;
