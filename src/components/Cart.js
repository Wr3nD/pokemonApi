import React from "react";
import {
    GiHealthNormal,
    GiWaterDrop,
    GiElectric,
    GiGroundbreaker,
    GiBroadsword,
    GiCheckedShield,
} from "react-icons/gi";
import { ImLeaf } from "react-icons/im";
import { AiFillFire } from "react-icons/ai";
const Cart = ({ data, id }) => {
    if (data) {
        const iconSelector = () => {
            if (data.types[0].type.name === "normal") {
                return <GiHealthNormal className="right-side-circle" />;
            }
            if (data.types[0].type.name === "grass") {
                return <ImLeaf className="right-side-circle" />;
            }
            if (data.types[0].type.name === "water") {
                return <GiWaterDrop className="right-side-circle" />;
            }
            if (data.types[0].type.name === "fire") {
                return <AiFillFire className="right-side-circle" />;
            }
            if (data.types[0].type.name === "electric") {
                return <GiElectric className="right-side-circle" />;
            }
            if (data.types[0].type.name === "ground") {
                return <GiGroundbreaker className="right-side-circle" />;
            }
            return <GiHealthNormal className="right-side-circle" />;
        };
        const colorSelector = () => {
            if (data.types[0].type.name === "normal") {
                return "normal";
            }
            if (data.types[0].type.name === "grass") {
                return "grass";
            }
            if (data.types[0].type.name === "water") {
                return "water";
            }
            if (data.types[0].type.name === "fire") {
                return "fire";
            }
            if (data.types[0].type.name === "electric") {
                return "electric";
            }
            if (data.types[0].type.name === "ground") {
                return "ground";
            }
            return "normal";
        };

        const chose = () => {
            if (data.name === id) {
                return "box";
            }
            return "";
        };
        return (
            <main className={`special${chose()} `}>
                <div
                    className={`main-${colorSelector()} 
                `}
                >
                    <div>
                        <h1 className="name-stats">
                            <span className="left-side">{data.name}</span>
                            <span className="right-side">
                                {data.stats[0].base_stat}
                                {data.stats[0].stat.name}
                                {iconSelector()}
                            </span>
                        </h1>
                    </div>

                    <img
                        src={data.sprites.front_default}
                        alt="image"
                        className="image"
                    />

                    <h5 className="special-box">
                        {data.types[0].type.name} Pokemon. Height {data.height}{" "}
                        inch ,Weight {data.weight} lbs
                    </h5>
                    <div className="main-data-box">
                        <div>
                            <div className="skills-data2">
                                {data.abilities.map((type) => {
                                    return (
                                        <div>
                                            <h4>Skill: {type.ability.name}</h4>
                                            <hr />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="skills-data2">
                                {data.stats.slice(3).map((type) => {
                                    return (
                                        <div>
                                            <h5>
                                                {type.stat.name}:{" "}
                                                {type.base_stat}
                                                <hr />
                                            </h5>
                                            {/* <h5>{type.stat.name}</h5> */}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="bottom-box">
                        <h2 className="down-left-box">
                            {data.stats[1].base_stat}
                            <GiBroadsword />
                        </h2>

                        <h2 className="down-right-box">
                            {data.stats[2].base_stat}
                            <GiCheckedShield />
                        </h2>
                    </div>
                </div>
            </main>
        );
    }
};

export default Cart;
