import React from "react";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import "../css/Pokemons.css";
const NextPageButtons = ({ pushNewOnes, pushPreviousOnes, pokemons }) => {
    return (
        <div>
            <div className="button-box">
                <div className="button-left">
                    <button className="arrow">
                        <BiSkipPreviousCircle
                            onClick={() => pushPreviousOnes()}
                        />
                    </button>
                </div>
                <div className="middle">
                    <h1>
                        Your favorite {pokemons ? "Pokemons" : "Berries"} on One
                        click
                    </h1>
                </div>
                <div className="button-right">
                    <button className="arrow" onClick={() => pushNewOnes()}>
                        <BiSkipNextCircle />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NextPageButtons;
