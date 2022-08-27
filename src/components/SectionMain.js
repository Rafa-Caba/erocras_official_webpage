import React from "react";
import styled from "styled-components";
import ero2021 from "./../images/ero-cras-2021.png";

const SectionMain = () => {
    return (
        <section className="center col-12 col-md-8 d-flex flex-column align-items-center order-0 order-md-1 gx-0">
            <div className="meaning w-100 d-flex flex-column align-items-center gx-0">
                <h2 className="d-none d-md-block">Ero Cras:</h2>
                <div className="d-flex flex-wrap flex-lg-nowrap flex-row justify-content-evenly align-items-center gap-0 gap-md-2 my-2">
                    <Words  className="border-end border-start border-2">Sabiduría</Words>
                    <Words  className="border-end border-start border-2">Adonai</Words>
                    <Words  className="border-end border-start border-2">Renuevo del tronco de Jesé</Words>
                    <Words  className="border-end border-start border-2">Llave de David</Words>
                    <Words  className="border-end border-start border-2">Sol - Resplandor de eterna Luz</Words>
                    <Words  className="border-end border-start border-2">Rey de las naciones</Words>
                    <Words  className="border-end border-start border-2">Emmanuel</Words>
                </div>
            </div>    

            <div id="carouselExampleCaptions" className="carousel slide my-3 mx-2" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button 
                        type="button" 
                        data-bs-target="#carouselExampleCaptions" 
                        data-bs-slide-to="0" 
                        className="active" 
                        aria-current="true" 
                        aria-label="Slide 1"
                    ></button>
                    <button 
                        type="button" 
                        data-bs-target="#carouselExampleCaptions" 
                        data-bs-slide-to="1" aria-label="Slide 2"
                    ></button>
                    <button 
                        type="button" 
                        data-bs-target="#carouselExampleCaptions" 
                        data-bs-slide-to="2" 
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ero2021} className="d-block w-100" alt="Ero Cras" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

const Words = styled.p`
    font-size: 1em;

    @media (max-width: 600px) {
        font-size: 0.8em;
    }

    &:hover {
        color: white;
        background: #9b54f7;
    }
`;

export default SectionMain;
