import React from "react";
import styled from "styled-components";
import jesusito from "../images/jesusito.jpg";

const SectionLeft = () => {
    return (
        <LeftSec className="d-none d-md-block col-12 col-md-2 d-flex flex-column justify-content-center align-items-center order-1 order-md-0 gx-0">
            <div className="col-9 g-0 my-5 mx-auto">
                <img 
                    src={jesusito} 
                    className="img-fluid" 
                    alt="Jesusito"
                />
            </div>
        </LeftSec>
    );
};

const LeftSec = styled.section`
    background: #EAD4FF;
`;

export default SectionLeft;