import React from "react";
import styled from "styled-components";
import erocras2021 from "./../images/ero-cras-2021.png";

const SectionNosotros = () => {
    return (
        <section className="center col-12 col-md-8 d-flex flex-column align-items-center order-0 order-md-1 gx-0">
            <div className="nosotros galeria my-3 mx-0 mx-md-2">
                <div className="nosotros p-1">
                    <p className="fs-3 fw-bolder">Historia...</p>
                    <Texto className="d-none d-md-block lh-base mx-2" id="bio">All started back in March 2014. There was a need for a choir 
                        at the San José chapel but there was no one to take that place to sing 
                        the Masses that were celebrated in there. So, one day, when the San José's 
                        feasts were taking place, must of the current members sat down along with 
                        others current ex members and decided we would be taking that option of 
                        becoming the official choir in that Chapel to company the ceremies there 
                        celebrated.<br /> Time went by and members started to leave the choir and 
                        some others were part of it. It's been 6 years and 4 months and we're 
                        keeping singing the Mass at San José's Chapel.
                    </Texto>
                    <Texto className="d-block d-md-none lh-sm" id="bio">All started back in March 2014. There was a need for a choir 
                        at the San José chapel but there was no one to take that place to sing 
                        the Masses that were celebrated in there. So, one day, when the San José's 
                        feasts were taking place, must of the current members sat down along with 
                        others current ex members and decided we would be taking that option of 
                        becoming the official choir in that Chapel to company the ceremies there 
                        celebrated.<br /> Time went by and members started to leave the choir and 
                        some others were part of it. It's been 6 years and 4 months and we're 
                        keeping singing the Mass at San José's Chapel.
                    </Texto>
                </div>

                <div className="imagen p-2 p-md-5 d-flex justify-content-center">
                    <img className="img-fluid col-12 col-lg-10" src={erocras2021} alt="Ero Cras" />
                </div>
            </div>
        </section>
    );
};

const Texto = styled.p`
    font-size: 1em;

    @media (max-width: 600px) {
        font-size: 0.8em;
    }
`;

export default SectionNosotros;