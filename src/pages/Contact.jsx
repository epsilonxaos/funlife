import '../assets/scss/pages/contact.scss';

import TitulosSeccion from '../components/titulos';
import { motion } from "framer-motion"
import { useState } from 'react';

const Contact = () => {
    const [formActive, setFormActive] = useState('contacto');

    function changeForm(value) {
        setFormActive(value);
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="contacto">
            <div className="container">

                <div className="text-center">
                    <TitulosSeccion title={'Contact'} />
                </div>

                <div className="pt-5 row justify-content-center">
                    <div className="col-12 col-lg-10">

                        <select className="form-control mb-5 sl" value={formActive}
                            onChange={e => changeForm(e.target.value)} name="formulario" id="formulario">
                            <option value="contacto">Contacto</option>
                            <option value="cotizacion">Cotización de evento</option>
                            <option value="cotizacion2">Cotización para viaje</option>
                        </select>

                        <form action="" method="post">
                            <div className="row">
                                <div className="col-12 mb-4 form-group">
                                    <label className="lb" htmlFor="nombre">Nombre Completo <span className="text-danger">*</span></label>
                                    <input className="form-control in" type="text" name="nombre" id="nombre" />
                                </div>
                                <div className="col-12 mb-4 col-md-4 form-group">
                                    <label className="lb" htmlFor="email">Email <span className="text-danger">*</span></label>
                                    <input className="form-control in" type="text" name="email" id="email" />
                                </div>
                                <div className="col-12 mb-4 col-md-4 form-group">
                                    <label className="lb" htmlFor="telefono">Teléfono</label>
                                    <input className="form-control in" type="text" name="telefono" id="telefono" />
                                </div>
                                <div className="col-12 mb-4 col-md-4 form-group">
                                    <label className="lb" htmlFor="asunto">Asunto</label>
                                    <input className="form-control in" type="text" name="asunto" id="asunto" />
                                </div>
                                {
                                    (formActive === 'cotizacion') ?
                                        <div className="col-12 mb-4 ">
                                            <label className="lb" htmlFor="asunto">¿Que tipo de evento es?</label>
                                            <input className="form-control in" type="text" name="asunto" id="asunto" />
                                        </div> 
                                        : ''
                                }
                                {
                                    (formActive === 'cotizacion2') ?
                                        <div className="col-12 mb-4 ">
                                            <label className="lb" htmlFor="asunto">¿Hacia donde desea viajar?</label>
                                            <input className="form-control in" type="text" name="asunto" id="asunto" />
                                        </div>
                                    : ''
                                }
                                <div className="col-12 mb-4 form-group">
                                    <label className="lb" htmlFor="comentarios">Comentarios <span className="text-danger">*</span></label>
                                    <textarea className="form-control tx" name="comentarios" id="comentarios" cols="30" rows="5"></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-send">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;