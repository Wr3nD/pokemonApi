import React, { useEffect, useState } from "react";
import { apiGetEvolutionChain } from "../axios/action";
import Cart from "./Cart";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Evolve = ({ id, SinglePokemonData, species }) => {
    const [loading, setLoading] = useState(false);
    const [evolution, setEvolution] = useState("");
    const [data1, setData1] = useState("");
    const [data2, setData2] = useState("");
    const [data3, setData3] = useState("");

    useEffect(() => {
        if (species) {
            setLoading(true);
            let regex = /\d+/i;
            const evolutionChain = species.evolution_chain.url
                .slice(41)
                .match(regex);
            const evol2 = parseInt(evolutionChain[0]);

            apiGetEvolutionChain(
                evol2,
                (data) => (setEvolution(data), setLoading(false)),
                (err) => console.log(err)
            );
        }
    }, [species]);
    useEffect(() => {
        const evolve1 = evolution?.chain?.species?.name;
        const evolve2 = evolution?.chain?.evolves_to[0].species?.name;
        const evolve3 =
            evolution?.chain?.evolves_to[0].evolves_to[0].species?.name;

        SinglePokemonData(evolve1, setData1);
        SinglePokemonData(evolve2, setData2);
        SinglePokemonData(evolve3, setData3);
    }, [evolution]);

    if (evolution) {
        return (
            <div className="grid">
                <Carousel>
                    <div>
                        <Cart data={data1} id={id} />
                    </div>
                    <div>
                        <Cart data={data2} id={id} />
                    </div>
                    <div>
                        <Cart data={data3} id={id} />
                    </div>
                </Carousel>
            </div>
        );
    }
};

export default Evolve;
