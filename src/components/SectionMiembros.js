import React from "react";
import "./../SectionMiembros.css"
import rafa from "./../images/images_members/rafa.JPEG";
import carito from "./../images/images_members/carito.JPEG";
import lupita from "./../images/images_members/lupe.png";
import daniel from "./../images/images_members/daniel.png";
import daniela from "./../images/images_members/daniela.png";
import mary from "./../images/images_members/maria.jpg";
import angelito from "./../images/images_members/angelito.png";
import mariana from "./../images/images_members/mariana.png";
import alan from "./../images/images_members/alan-2.png";
import tonito from "./../images/images_members/tonito.png";
import styled from "styled-components";

const SectionMiembros = () => {
    return (
        <section className="center col-12 col-md-8 d-flex flex-column align-items-center order-0 order-md-1 gx-0">
            <div className="miembros w-100 g-0">
                <p className="text-center fw-bolder fs-1">- Integrantes -</p>
                <div className="tarjetas w-100 d-flex flex-row flex-wrap justify-content-center">
                    <div className="contenedor_tarjeta">
                        <figure className="position-relative m-0">
                            <img className="frontal d-block" src={rafa} alt="Rafael" />
                            <figcaption className="trasera">
                                <h2 className="titulo fs-3">Rafael Cabanillas</h2>
                                <hr />
                                <p className="fs-4 lh-sm">Guitarra y voz</p>
                            </figcaption>
                        </figure>

                        <p className="text-center fw-bolder">Rafael Cabanillas</p>
                    </div>
                    <div className="contenedor_tarjeta">
                        <figure className="position-relative m-0">
                            <img className="frontal" src={carito} alt="Carito" />
                            <figcaption className="trasera">
                                <h2 className="titulo fs-3">Carito Dominguez</h2>
                                <hr />
                                <p className="fs-4 lh-sm">Voz</p>
                            </figcaption>
                        </figure>

                        <p className="text-center fw-bolder">Carito Dominguez</p>
                    </div>
                    <div className="contenedor_tarjeta">
                        <figure className="position-relative m-0">
                            <img className="frontal" src={lupita} alt="Lupita" />
                            <figcaption className="trasera">
                                <h2 className="titulo fs-3 fs-3">Lupita Dominguez</h2>
                                <hr />
                                <p className="fs-4 lh-sm">Voz y pandero</p>
                            </figcaption>
                        </figure>
                        
                        <p className="text-center fw-bolder">Lupita Dominguez</p>
                    </div>
                    <div className="contenedor_tarjeta">
                        <figure className="position-relative m-0">
                            <img className="frontal" src={mariana} alt="Mariana" />
                            <figcaption className="trasera">
                                <h2 className="titulo fs-3">Mariana Herrera</h2>
                                <hr />
                                <p className="fs-4 lh-sm">Voz</p>
                            </figcaption>
                        </figure>

                        <p className="text-center fw-bolder">Mariana Herrera</p>
                    </div>
                    <div className="contenedor_tarjeta">
                        <figure className="position-relative m-0">
                            <img className="frontal" src={angelito} alt="Angelito" />
                            <figcaption className="trasera">
                                <h2 className="titulo fs-3">Angel Dominguez</h2>
                                <hr />
                                <p className="fs-4 lh-sm">Guitarra y voz</p>
                            </figcaption>
                        </figure>

                        <p className="text-center fw-bolder">Angel Dominguez</p>
                    </div>
                    <div className="contenedor_tarjeta">
                        <figure className="position-relative m-0">
                            <img className="frontal" src={daniela} alt="Daniela" />
                            <figcaption className="trasera">
                                <h2 className="titulo fs-3">Daniela Marquez</h2>
                                <hr />
                                <p className="fs-4 lh-sm">Mandolina y voz</p>
                            </figcaption>
                        </figure>

                        <p className="text-center fw-bolder">Daniela Marquez</p>
                    </div>
                    <div className="contenedor_tarjeta">
                        <figure className="position-relative m-0">
                            <img className="frontal" src={alan} alt="Alan" />
                            <figcaption className="trasera">
                                <h2 className="titulo fs-3">Alan Piña</h2>
                                <hr />
                                <p className="fs-4 lh-sm">Guitarra y voz</p>
                            </figcaption>
                        </figure>

                        <p className="text-center fw-bolder">Alan Piña</p>
                    </div>
                    <div className="contenedor_tarjeta">
                        <figure className="position-relative m-0">
                            <img className="frontal" src={mary} alt="María" />
                            <figcaption className="trasera">
                                <h2 className="titulo fs-3">María Cisneros</h2>
                                <hr />
                                <p className="fs-4 lh-sm">Mandolina y Voz</p>
                            </figcaption>
                        </figure>

                        <p className="text-center fw-bolder">María Cisneros</p>
                    </div>
                    <div className="contenedor_tarjeta">
                        <figure className="position-relative m-0">
                            <img className="frontal" src={daniel} alt="Daniel" />
                            <figcaption className="trasera">
                                <h2 className="titulo fs-3">Daniel Glez</h2>
                                <hr />
                                <p className="fs-4 lh-sm">Voz</p>
                            </figcaption>
                        </figure>

                        <p className="text-center fw-bolder">Daniel Glez</p>
                    </div>
                    <div className="contenedor_tarjeta">
                        <figure className="position-relative m-0">
                            <img className="frontal" src={tonito} alt="Tonito" />
                            <figcaption className="trasera">
                                <h2 className="titulo fs-3">Antonio Arias</h2>
                                <hr />
                                <p className="fs-4 lh-sm">Mandolina y voz</p>
                            </figcaption>
                        </figure>

                        <p className="text-center fw-bolder">Antonio Arias</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionMiembros;