import React from "react";
import { apiGetAllPokemons } from "../axios/action";
import "../css/Home.css";
import { Slide } from "react-slideshow-image";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <main>
            <div className="main-box">
                <h1 className="box">biggest database of Pokemons</h1>
            </div>
            <div>
                <Slider />
            </div>
        </main>
    );
};

export default Home;
