import React from "react";
import styled from "styled-components";

const SectionContacto = () => {
    return (
        <section className="center col-12 col-md-8 d-flex flex-column align-items-center order-0 order-md-1 my-4 gx-0">
            <p className="text-center fs-2">Contacto</p>

            <div className="form mb-3 w-75">
                <form action="">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="correo">Correo Electrónico</label>
                        <input type="text" className="form-control" id="correo" aria-describedby="ayuda-correo" />
                        <div id="ayuda-correo" className="form-text">
                            Te enviaremos un mensaje de confirmación
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="mensaje">Mensaje</label>
                        <textarea className="form-control" name="mensaje" id="mensaje"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar mensaje</button>
                </form>
            </div>
        </section>
    );
};

export default SectionContacto;