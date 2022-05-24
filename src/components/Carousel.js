import React from "react";
import "../css/Carousel.css";
import Cart from "./Cart";
const Carousel = ({ data1, data2, data3, id }) => {
    if (data1.name === id) {
        return (
            <div className="container">
                <input type="radio" name="slider" id="item-1" checked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <div className="cards">
                    <label className="card" for="item-1" id="song-1">
                        <Cart data={data1} id={id} className="img" />
                    </label>
                    <label className="card" for="item-2" id="song-2">
                        <Cart data={data2} id={id} className="img" />
                    </label>
                    <label className="card" for="item-3" id="song-3">
                        <Cart data={data3} id={id} className="img" />
                    </label>
                </div>
                <div className="player"></div>
            </div>
        );
    }
    if (data2.name === id) {
        return (
            <div className="container">
                <input type="radio" name="slider" id="item-1" checked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <div className="cards">
                    <label className="card" for="item-1" id="song-1">
                        <Cart data={data2} id={id} className="img" />
                    </label>
                    <label className="card" for="item-2" id="song-2">
                        <Cart data={data3} id={id} className="img" />
                    </label>
                    <label className="card" for="item-3" id="song-3">
                        <Cart data={data1} id={id} className="img" />
                    </label>
                </div>
                <div className="player"></div>
            </div>
        );
    }
    if (data3.name === id) {
        return (
            <div className="container">
                <input type="radio" name="slider" id="item-1" checked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <div className="cards">
                    <label className="card" for="item-1" id="song-1">
                        <Cart data={data3} id={id} className="img" />
                    </label>
                    <label className="card" for="item-2" id="song-2">
                        <Cart data={data2} id={id} className="img" />
                    </label>
                    <label className="card" for="item-3" id="song-3">
                        <Cart data={data1} id={id} className="img" />
                    </label>
                </div>
                <div className="player"></div>
            </div>
        );
    }
};

export default Carousel;
