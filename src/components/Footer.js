import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as FontAwesome } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <FooterStyled className="footer row gx-0">
            <div className="footer px-3 py-2 d-flex gx-0 justify-content-between flex-column flex-md-row">
                <div className="copyright my-2">
                    <p className="text-black-50">Creada por Rafael Cabanillas - 2022</p>
                </div>
                <Redes className="redes gx-0">
                    <ul className="nav w-100 order-1 d-flex justify-content-center px-2">
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                href="https://www.facebook.com/eroCrasCoro/"
                            >
                                <FontAwesome icon={faFacebook} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                href="https://instagram.com/ero.cras?utm_medium=copy_link"
                            >
                                <FontAwesome icon={faInstagram} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                href="https://youtube.com/channel/UCjh7iTV-ddkSxaLi7A1FJgA"
                            >
                                <FontAwesome icon={faYoutube} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                href="/contacto"
                            >
                                <FontAwesome icon={faEnvelope} />
                            </Link>
                        </li>
                    </ul>
                </Redes>
            </div>
        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
    background: #b68fe6;  
`;

const Redes = styled.div`
    color: #fff
    font-size: 1.5em;
    background: #A966FF
    border-radius: 5px
    &:hover {
        background: #721be3;
    }
`;

const Link = styled.a`
    font-size: 1.4em;
    color: #4f1896;
`;

export default Footer;