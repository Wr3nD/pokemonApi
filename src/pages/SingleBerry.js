import React, { useEffect, useState } from "react";
import { BiSkipPreviousCircle } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { apiGetAllBerryData } from "../axios/action";
import Loading from "../components/Loading";
import "../css/SinglePokemon.css";
const SingleBerry = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    console.log(data);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        apiGetAllBerryData(
            id,
            (data) => (setData(data), setLoading(false)),
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
                        onClick={() => navigate("/berries")}
                    />
                </button>
            </div>
            <main className="main-fire">
                <div className="name-stats2">
                    <h1>{data.name}</h1>
                </div>

                <h5 className="special-box">
                    Time to grow {data.growth_time}, Max possible harvest{" "}
                    {data.max_harvest}
                </h5>
                <div className="main-data-box">
                    <div>
                        <div className="skills-data3">
                            {data.flavors?.map((type) => {
                                return (
                                    <div className="inside-box3">
                                        <h4>flavor: {type.flavor.name}</h4>
                                        <h4>potency: {type.potency}</h4>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="skills-data2">
                            <h2>Size: {data.size}</h2>
                        </div>
                    </div>
                </div>
                <div className="bottom-box">
                    <h2>Natural Power : {data.natural_gift_power}</h2>
                </div>
            </main>
        </>
    );
};

export default SingleBerry;
