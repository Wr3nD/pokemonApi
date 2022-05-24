import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGetAllPokemons } from "../axios/action";
import Loading from "../components/Loading";
import { BiSkipPreviousCircle, BiSkipNextCircle } from "react-icons/bi";
import "../css/Pokemons.css";
import NextPageButtons from "../components/NextPageButtons";
const Pokemons = () => {
    const [pokemons, setPokemons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(0);

    console.log(pokemons);
    useEffect(() => {
        getAllPokemons(amount);
    }, []);
    const getAllPokemons = (offset) => {
        apiGetAllPokemons(
            offset * 20,
            (data) => (setPokemons(data), setLoading(false)),
            (err) => console.log(err)
        );
    };
    const pushNewOnes = () => {
        setLoading(true);

        const push = parseInt(amount) + 1;

        getAllPokemons(push);
        setAmount(push);
    };
    const pushPreviousOnes = () => {
        if (amount > 0) {
            const push = parseInt(amount) - 1;
            getAllPokemons(push);
            setAmount(push);
        }
        if (amount < 0) {
            const push = 0;
            getAllPokemons(push);
            setAmount(push);
        }
    };
    if (loading) {
        return <Loading />;
    }
    return (
        <main>
            <NextPageButtons
                pushNewOnes={pushNewOnes}
                pushPreviousOnes={pushPreviousOnes}
                pokemons={pokemons}
            />
            <div className="border-box">
                <div className="grid-box">
                    {pokemons?.results?.map((pokemon) => {
                        const { url, name } = pokemon;
                        return (
                            <Link
                                to={`/pokemons/${name}`}
                                className="grid-box2"
                                key={url}
                            >
                                {/* <Link to={`/pokemons/${name}`}>tady</Link> */}
                                <h1>{name}</h1>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default Pokemons;
