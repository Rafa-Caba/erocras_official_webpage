import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled className="row gx-0">
            <div className="titulo-nav col-12 g-0 d-flex flex-column">
                <div className="titulo mx-5 text-black d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
                    <div className="titulo text-center text-md-start"><h1>Ero Cras Oficial</h1></div>
                    <Link className="nav-link text-white fw-bold px-3" href='/admin'>Panel</Link>
                </div>

                <NavStyled className="navbar w-100 d-flex">
                    <ul className="nav w-100 nav-pills gap-1 nav-fill">
                        <ListItem className="nav-item">
                        <Link className="nav-link text-black p-1" href="/">Ero Cras Inicio</Link>
                        </ListItem>
                        <ListItem className="nav-item">
                        <Link className="nav-link text-black p-1" href="/miembros">Miembros</Link>
                        </ListItem>
                        <ListItem className="nav-item">
                        <Link className="nav-link text-black p-1" href="/misa_erocras">Misa Ero Cras</Link>
                        </ListItem>
                        <ListItem className="nav-item">
                        <Link className="nav-link text-black p-1" href="/nosotros">Nosotros</Link>
                        </ListItem>
                        <ListItem className="nav-item">
                        <Link className="nav-link text-black p-1" href="/contacto">Contacto</Link>
                        </ListItem>
                    </ul>
                </NavStyled>
            </div>
        </HeaderStyled>
    );
};

const HeaderStyled = styled.header`
    background: #CFAEF9;
`;

const NavStyled = styled.nav`
    background: #F3E3FB;

    @media (max-width: 600px) {
        font-size: 0.8em;
    }
`;

const ListItem = styled.li`
    border-radius: 8px;

    @media (max-width: 600px) {
        border: 2px solid #7a40f7;
    }
`;

const Link = styled.a`
    font-size: 1.2em;

    &:hover {
        background: #9b54f7;
    }
`;

export default Header;