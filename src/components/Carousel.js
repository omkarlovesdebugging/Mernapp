import React from 'react'
import burger from '../assets/burger.jpg'
import Pizza from '../assets/Pizza.png'
import Barbeque from '../assets/Barbeque.jpg'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="carousel-item active">
                        <img src={burger} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Burger"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Pizza}
                            className="d-block w-100"
                            style={{ filter: "brightness(30%)" }}
                            alt="Pizza"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={Barbeque}
                            className="d-block w-100"
                            style={{ filter: "brightness(30%)" }}
                            alt="Barbeque"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}
