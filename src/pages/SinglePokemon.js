import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
    apiGetAllPokemonsData,
    apiGetEvolutionChain,
    apiGetPokemonSpecies,
} from "../axios/action";
import "../css/SinglePokemon.css";

import Loading from "../components/Loading";
import { BiSkipPreviousCircle } from "react-icons/bi";
import Cart from "../components/Cart";
import Evolve from "../components/Evolve";
const SinglePokemon = () => {
    // single pokemon data
    const [data, setData] = useState("");
    //second evolution of this pokemon data

    // his pokemon-species-data
    const [species, setSpecies] = useState("");
    // his evolution tree

    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate();

    const SinglePokemonData = (name, send) => {
        apiGetAllPokemonsData(
            name,
            (data) => (send(data), setLoading(false)),
            (err) => console.log(err)
        );
    };

    useEffect(() => {
        SinglePokemonData(id, setData);
        apiGetPokemonSpecies(
            id,
            (data) => (setSpecies(data), setLoading(false)),
            (err) => console.log(err)
        );
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className="button-left">
                <button className="arrow">
                    <BiSkipPreviousCircle
                        onClick={() => navigate("/pokemons")}
                    />
                </button>
            </div>
            <div className="grid">
                <Evolve
                    pokemon={data}
                    SinglePokemonData={SinglePokemonData}
                    id={id}
                    species={species}
                />
            </div>
        </>
    );
};

export default SinglePokemon;
