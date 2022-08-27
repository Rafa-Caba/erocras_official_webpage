import React from "react";
import styled from "styled-components";
import cruz from "./../images/ero-cras-cruz.png";

const SectionRight = () => {
    return (
        <RightSec className="logo d-flex justify-content-center order-md-2">
            <div className="logo-img d-flex flex-column align-items-center col-9 my-4 my-md-5 mx-auto gx-0">
                <img 
                    className="img-fluid col-5 col-md-12" 
                    src={cruz} 
                    alt="Ero Cras"
                />
            </div>
        </RightSec>
    );
};

const RightSec = styled.section`
    background: #EAD4FF;
`;

export default SectionRight;