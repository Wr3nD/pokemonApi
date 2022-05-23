import React from "react";
import "react-slideshow-image/dist/styles.css";

import { Slide } from "react-slideshow-image";
const Slider = () => {
    const style = {
        textAlign: "center",
        userDrag: "none",

        fontSize: "30px",
        margin: "1rem",
    };

    const properties = {
        duration: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <div>
            <Slide {...properties}>
                <div style={style}>
                    <img
                        src={
                            "https://mcdn.wallpapersafari.com/medium/38/80/Xc8qgQ.png"
                        }
                        alt="image"
                    />
                </div>
                <div style={style}>
                    <img
                        src={
                            "https://mcdn.wallpapersafari.com/medium/67/95/t45ij7.jpg"
                        }
                        alt="image"
                    />
                </div>
                <div style={style}>
                    {" "}
                    <img
                        src={
                            "https://mcdn.wallpapersafari.com/medium/38/80/Xc8qgQ.png"
                        }
                        alt="image"
                    />
                </div>
                <div style={style}>
                    {" "}
                    <img
                        src={
                            "https://mcdn.wallpapersafari.com/medium/67/95/t45ij7.jpg"
                        }
                        alt="image"
                    />
                </div>
                <div style={style}>
                    {" "}
                    <img
                        src={
                            "https://mcdn.wallpapersafari.com/medium/38/80/Xc8qgQ.png"
                        }
                        alt="image"
                    />
                </div>
                <div style={style}>
                    {" "}
                    <img
                        src={
                            "https://mcdn.wallpapersafari.com/medium/38/80/Xc8qgQ.png"
                        }
                        alt="image"
                    />
                </div>
                <div style={style}>
                    {" "}
                    <img
                        src={
                            "https://mcdn.wallpapersafari.com/medium/38/80/Xc8qgQ.png"
                        }
                        alt="image"
                    />
                </div>
                <div style={style}>
                    {" "}
                    <img
                        src={
                            "https://mcdn.wallpapersafari.com/medium/67/95/t45ij7.jpg"
                        }
                        alt="image"
                    />
                </div>
            </Slide>
        </div>
    );
};
export default Slider;
