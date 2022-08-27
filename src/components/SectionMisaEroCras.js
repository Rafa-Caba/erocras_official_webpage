import React from "react";
import styled from "styled-components";
import coro_dibujo from "./../images/images_members/coro-dibujo.png";

const SectionMisaEroCras = () => {
    return (
        <section className="center col-12 col-md-8 d-flex flex-column align-items-center order-0 order-md-1 gx-0">
            <div className="galeria w-100 m-3 p-4 g-0">
                <p className="fs-2 fw-bold">Cantos - Misa</p>

                <div className="menu-cantos w-100 d-flex flex-row flex-wrap justify-content-around">
                    <div className="Entrada p-0 mb-3 me-1">
                        {/* <!-- Button trigger modal --> */}
                        <Link type="button" className="nav-link text-white px-3 rounded-3" data-bs-toggle="modal" data-bs-target="#cantoEntrada">
                            Entrada
                        </Link>
                        
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="cantoEntrada" tabIndex="-1" aria-labelledby="cantoEntradaLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="cantoEntradaLabel">Entrada</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <!-- Agregamos a inner acordeon para el tipo de canto --> */}
                                        <div className="accordion" id="accordionEntrada">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header text-center" id="heading<?php echo $canto['id']; ?>">
                                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo $canto['id']; ?>" aria-expanded="true" aria-controls="collapse<?php echo $canto['id']; ?>">
                                                        Canto 1
                                                    </button>
                                                </h2>
                                                <div id="collapse<?php echo $canto['id']; ?>" className="accordion-collapse collapse" aria-labelledby="heading<?php echo $canto['id']; ?>" data-bs-parent="#accordionCanto">
                                                    <div className="accordion-body">
                                                        <p className="canto-single fw-bolder fs-4 lh-sm">Titulo 1</p>
                                                        <p className="text-start">Letra Canto</p>

                                                        <p className="fst-italic fs-6">Tipo and Compositor</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Kyrie p-0 mb-3 me-1">
                        {/* <!-- Button trigger modal --> */}
                        <Link type="button" className="nav-link text-white px-3 rounded-3" data-bs-toggle="modal" data-bs-target="#cantoKyrie">
                            Kyrie
                        </Link>
                        
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="cantoKyrie" tabIndex="-1" aria-labelledby="cantoKyrieLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="cantoKyrieLabel">Kyrie</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <!-- Agregamos a inner acordeon para el tipo de canto --> */}
                                        <div className="accordion" id="accordionKyrie">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header text-center" id="heading<?php echo $canto['id']; ?>">
                                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo $canto['id']; ?>" aria-expanded="true" aria-controls="collapse<?php echo $canto['id']; ?>">
                                                        Titulo 2
                                                    </button>
                                                </h2>
                                                <div id="collapse<?php echo $canto['id']; ?>" className="accordion-collapse collapse" aria-labelledby="heading<?php echo $canto['id']; ?>" data-bs-parent="#accordionCanto">
                                                    <div className="accordion-body">
                                                        <p className="canto-single fw-bolder fs-4 lh-sm">Titulo 2</p>
                                                        <p className="text-start">letra canto</p>

                                                        <p className="fst-italic fs-6">Tipo and Compositor</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Gloria p-0 mb-3 me-1">
                        {/* <!-- Button trigger modal --> */}
                        <Link type="button" className="nav-link text-white px-3 rounded-3" data-bs-toggle="modal" data-bs-target="#cantoGloria">
                            Gloria
                        </Link>
                        
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="cantoGloria" tabIndex="-1" aria-labelledby="cantoGloriaLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="cantoGloriaLabel">Gloria</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <!-- Agregamos a inner acordeon para el tipo de canto --> */}
                                        <div className="accordion" id="accordionGloria">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header text-center" id="heading<?php echo $canto['id']; ?>">
                                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo $canto['id']; ?>" aria-expanded="true" aria-controls="collapse<?php echo $canto['id']; ?>">
                                                        Titulo 3
                                                    </button>
                                                </h2>
                                                <div id="collapse<?php echo $canto['id']; ?>" className="accordion-collapse collapse" aria-labelledby="heading<?php echo $canto['id']; ?>" data-bs-parent="#accordionCanto">
                                                    <div className="accordion-body">
                                                        <p className="canto-single fw-bolder fs-4 lh-sm">Titulo 3</p>
                                                        <p className="text-start">Letra canto</p>

                                                        <p className="fst-italic fs-6">Tipo and Compositor</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Aleluya p-0 mb-3 me-1">
                        {/* <!-- Button trigger modal --> */}
                        <Link type="button" className="nav-link text-white px-3 rounded-3" data-bs-toggle="modal" data-bs-target="#cantoAleluya">
                            Aleluya
                        </Link>
                        
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="cantoAleluya" tabIndex="-1" aria-labelledby="cantoAleluyaLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="cantoAleluyaLabel">Aleluya</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <!-- Agregamos a inner acordeon para el tipo de canto --> */}
                                        <div className="accordion" id="accordionAleluya">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header text-center" id="heading<?php echo $canto['id']; ?>">
                                                <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo $canto['id']; ?>" aria-expanded="true" aria-controls="collapse<?php echo $canto['id']; ?>">
                                                    Titulo 4
                                                </button>
                                                </h2>
                                                <div id="collapse<?php echo $canto['id']; ?>" className="accordion-collapse collapse" aria-labelledby="heading<?php echo $canto['id']; ?>" data-bs-parent="#accordionCanto">
                                                    <div className="accordion-body">
                                                        <p className="canto-single fw-bolder fs-4 lh-sm">Titulo 4</p>
                                                        <p className="text-start">Letra 4</p>

                                                        <p className="fst-italic fs-6">Tipo and Compositor</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Presentacion_de_Dones p-0 mb-3 me-1">
                        {/* <!-- Button trigger modal --> */}
                        <Link type="button" className="nav-link text-white px-3 rounded-3" data-bs-toggle="modal" data-bs-target="#cantoPresentacion_de_Dones">
                            Dones
                        </Link>
                        
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="cantoPresentacion_de_Dones" tabIndex="-1" aria-labelledby="cantoPresentacion_de_DonesLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="cantoPresentacion_de_DonesLabel">Presentacion de Dones</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <!-- Agregamos a inner acordeon para el tipo de canto --> */}
                                        <div className="accordion" id="accordionPresentacion_de_Dones">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header text-center" id="heading<?php echo $canto['id']; ?>">
                                                <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo $canto['id']; ?>" aria-expanded="true" aria-controls="collapse<?php echo $canto['id']; ?>">
                                                    Titulo 5
                                                </button>
                                                </h2>
                                                <div id="collapse<?php echo $canto['id']; ?>" className="accordion-collapse collapse" aria-labelledby="heading<?php echo $canto['id']; ?>" data-bs-parent="#accordionCanto">
                                                    <div className="accordion-body">
                                                        <p className="canto-single fw-bolder fs-4 lh-sm">Titulo 5</p>
                                                        <p className="text-start">Letra 5</p>

                                                        <p className="fst-italic fs-6">Tipo and Compositor</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Santo p-0 mb-3 me-1">
                        {/* <!-- Button trigger modal --> */}
                        <Link type="button" className="nav-link text-white px-3 rounded-3" data-bs-toggle="modal" data-bs-target="#cantoSanto">
                            Santo
                        </Link>
                        
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="cantoSanto" tabIndex="-1" aria-labelledby="cantoSantoLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="cantoSantoLabel">Santo</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <!-- Agregamos a inner acordeon para el tipo de canto --> */}
                                        <div className="accordion" id="accordionSanto">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header text-center" id="heading<?php echo $canto['id']; ?>">
                                                <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo $canto['id']; ?>" aria-expanded="true" aria-controls="collapse<?php echo $canto['id']; ?>">
                                                    Titulo 6
                                                </button>
                                                </h2>
                                                <div id="collapse<?php echo $canto['id']; ?>" className="accordion-collapse collapse" aria-labelledby="heading<?php echo $canto['id']; ?>" data-bs-parent="#accordionCanto">
                                                    <div className="accordion-body">
                                                        <p className="canto-single fw-bolder fs-4 lh-sm">Titulo 6</p>
                                                        <p className="text-start">Letra 6</p>

                                                        <p className="fst-italic fs-6">Tipo and Compositor</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Cordero_de_Dios p-0 mb-3 me-1">
                        {/* <!-- Button trigger modal --> */}
                        <Link type="button" className="nav-link text-white px-3 rounded-3" data-bs-toggle="modal" data-bs-target="#cantoCordero_de_Dios">
                            Cordero
                        </Link>
                        
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="cantoCordero_de_Dios" tabIndex="-1" aria-labelledby="cantoCordero_de_DiosLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="cantoCordero_de_DiosLabel">Cordero de Dios</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <!-- Agregamos a inner acordeon para el tipo de canto --> */}
                                        <div className="accordion" id="accordionCordero_de_Dios">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header text-center" id="heading<?php echo $canto['id']; ?>">
                                                <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo $canto['id']; ?>" aria-expanded="true" aria-controls="collapse<?php echo $canto['id']; ?>">
                                                    Titulo 7
                                                </button>
                                                </h2>
                                                <div id="collapse<?php echo $canto['id']; ?>" className="accordion-collapse collapse" aria-labelledby="heading<?php echo $canto['id']; ?>" data-bs-parent="#accordionCanto">
                                                    <div className="accordion-body">
                                                        <p className="canto-single fw-bolder fs-4 lh-sm">Titulo 7</p>
                                                        <p className="text-start">Letra 7</p>

                                                        <p className="fst-italic fs-6">Tipo and Compositor</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Comunion p-0 mb-3 me-1">
                        {/* <!-- Button trigger modal --> */}
                        <Link type="button" className="nav-link text-white px-3 rounded-3" data-bs-toggle="modal" data-bs-target="#cantoComunion">
                            Comunion
                        </Link>
                        
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="cantoComunion" tabIndex="-1" aria-labelledby="cantoComunionLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="cantoComunionLabel">Comunion</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <!-- Agregamos a inner acordeon para el tipo de canto --> */}
                                        <div className="accordion" id="accordionComunion">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header text-center" id="heading<?php echo $canto['id']; ?>">
                                                <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo $canto['id']; ?>" aria-expanded="true" aria-controls="collapse<?php echo $canto['id']; ?>">
                                                    Titulo 8
                                                </button>
                                                </h2>
                                                <div id="collapse<?php echo $canto['id']; ?>" className="accordion-collapse collapse" aria-labelledby="heading<?php echo $canto['id']; ?>" data-bs-parent="#accordionCanto">
                                                    <div className="accordion-body">
                                                        <p className="canto-single fw-bolder fs-4 lh-sm">Titulo 8</p>
                                                        <p className="text-start">Letra 8</p>

                                                        <p className="fst-italic fs-6">Tipo and Compositor</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Salida p-0 mb-3">
                        {/* <!-- Button trigger modal --> */}
                        <Link type="button" className="nav-link text-white px-3 rounded-3" data-bs-toggle="modal" data-bs-target="#cantoSalida">
                            Salida
                        </Link>
                        
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="cantoSalida" tabIndex="-1" aria-labelledby="cantoSalidaLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="cantoSalidaLabel">Salida</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <!-- Agregamos a inner acordeon para el tipo de canto --> */}
                                        <div className="accordion" id="accordionSalida">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header text-center" id="heading<?php echo $canto['id']; ?>">
                                                <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo $canto['id']; ?>" aria-expanded="true" aria-controls="collapse<?php echo $canto['id']; ?>">
                                                    Titulo 9
                                                </button>
                                                </h2>
                                                <div id="collapse<?php echo $canto['id']; ?>" className="accordion-collapse collapse" aria-labelledby="heading<?php echo $canto['id']; ?>" data-bs-parent="#accordionCanto">
                                                <div className="accordion-body">
                                                    <p className="canto-single fw-bolder fs-4 lh-sm">Titulo 9</p>
                                                    <p className="text-start">Letra 9</p>

                                                    <p className="fst-italic fs-6">Tipo and Compositor</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cantos-imagen d-flex mb-3 mx-auto">
                    <img className="img-fluid my-5 mx-auto col-8 col-md-6" src={coro_dibujo} alt="Dibujo coro" />
                </div>
            </div>
        </section>
    );
};

const Link = styled.a`
    font-size: 1.2em;
    background: #9b54f7;

    &:hover {
        background: #ad6df7;
    }
`;

export default SectionMisaEroCras;