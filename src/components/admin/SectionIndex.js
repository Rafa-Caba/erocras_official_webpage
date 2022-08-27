import React from "react";
import styled from 'styled-components';

const SectionIndex = () => {
    return (
        <div>
            <section className="col-12 d-flex justify-content-center m-0">
                <div className="galeria w-100 d-flex flex-column justify-content-center py-4 mb-5">
                    <p className="text-center fs-3 fw-bold">Panel de Control</p>

                    <div className="panel-titulo d-flex justify-content-center gap-2 gap-md-3">
                        <Link href="/" className="nav-link text-white fw-bold px-4 rounded-3">Cantos</Link>
                        <Link href="/" className="nav-link text-white fw-bold px-4 rounded-3">Galeria</Link>
                        <Link href="/" className="nav-link text-white fw-bold px-4 rounded-3">Cerrar Sesion</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const Link = styled.a`
    font-size: 1.2em;
    background: #9b54f7;

    &:hover {
        background: #ad6df7;
    }
`;

export default SectionIndex;