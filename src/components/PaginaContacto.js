import React from "react";
import styled from "styled-components";
import Footer from './Footer';
import Header from './Header';
import SectionContacto from "./SectionContacto";
import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';

const PaginaContacto = () => {
    return (
        <div>
            <Header />
            <Main className="d-flex flex-column flex-md-row justify-content-sm-between justify-content-center gx-0">
                <SectionLeft />
                <SectionContacto /> 
                <SectionRight />
            </Main>
            <Footer />
        </div>
    );
};

const Main = styled.main`
  display: flex;
`;

export default PaginaContacto;