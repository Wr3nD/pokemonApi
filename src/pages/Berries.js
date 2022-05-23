import React, { useEffect, useState } from "react";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { apiGetAllBerries } from "../axios/action";
import Loading from "../components/Loading";
import NextPageButtons from "../components/NextPageButtons";

const Berries = () => {
    const [berryes, setBerryes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(1);
    console.log(berryes);
    useEffect(() => {
        apiGetAllBerries(
            amount,
            (data) => (setBerryes(data), setLoading(false)),
            (err) => console.log(err)
        );
    }, []);

    const pushNewOnes = () => {
        if (berryes.results.length) {
            setLoading(true);

            const push = parseInt(amount) + 1;
            console.log(push);
            console.log("AMOUNT", amount);
            apiGetAllBerries(
                push * 20,
                (data) => (setBerryes(data), setLoading(false)),
                (err) => console.log(err)
            );
            setAmount(push);
        }
    };
    const pushPreviousOnes = () => {
        if (amount > 0) {
            setLoading(true);
            const push = parseInt(amount) - 1;
            apiGetAllBerries(
                push * 20,
                (data) => (setBerryes(data), setLoading(false)),
                (err) => console.log(err)
            );
            setAmount(push);
        }
        if (amount < 0) {
            setLoading(true);
            const push = 0;
            apiGetAllBerries(
                push * 20,
                (data) => (setBerryes(data), setLoading(false)),
                (err) => console.log(err)
            );
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
                berries={berryes}
            />
            <div className="border-box">
                <div className="grid-box">
                    {berryes.results.length ? (
                        berryes?.results?.map((pokemon) => {
                            const { url, name } = pokemon;
                            return (
                                <>
                                    <Link
                                        to={`/berries/${name}`}
                                        className="grid-box2"
                                        key={name}
                                    >
                                        {/* <Link to={`/pokemons/${name}`}>tady</Link> */}
                                        <h1>{name}</h1>
                                    </Link>
                                </>
                            );
                        })
                    ) : (
                        <h1 className="center">there are no more berries</h1>
                    )}
                    {}
                </div>
            </div>
        </main>
    );
};

export default Berries;
