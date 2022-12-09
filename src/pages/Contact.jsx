import '../assets/scss/pages/contact.scss';

import TitulosSeccion from '../components/titulos';
import { motion } from "framer-motion"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const [formActive, setFormActive] = useState('contacto');
    const { t } = useTranslation();

    function changeForm(value) {
        setFormActive(value);
    }

    return (
        <motion.div
            data-scroll-section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="contacto">
            <div className="container">

                <div
                    className="text-center"
                    data-scroll
                    data-scroll-speed="1"
                    data-scroll-position="left"
                    data-scroll-direction="horizontal"
                >
                    <TitulosSeccion title={t('contacto')} />
                </div>

                <div className="pt-5 row justify-content-center">
                    <div className="col-12 col-lg-10">

                        {/* <select className="form-control mb-5 sl" value={formActive}
                            onChange={e => changeForm(e.target.value)} name="formulario" id="formulario">
                            <option value="contacto">Contacto</option>
                            <option value="cotizacion">Cotización de evento</option>
                            <option value="cotizacion2">Cotización para viaje</option>
                        </select> */}

                        <form action="" method="post">
                            <div className="row">
                                <div className="col-12 col-md-6 mb-4 form-group">
                                    <label className="lb" htmlFor="nombre">{t('nombre')} <span className="text-danger">*</span></label>
                                    <input className="form-control in" type="text" name="nombre" id="nombre" />
                                </div>
                                <div className="col-12 col-md-6 mb-4 form-group">
                                    <label className="lb" htmlFor="nombre">{t('apellido')} <span className="text-danger">*</span></label>
                                    <input className="form-control in" type="text" name="nombre" id="nombre" />
                                </div>
                                <div className="col-12 mb-4 col-md-4 form-group">
                                    <label className="lb" htmlFor="email">{t('email')} <span className="text-danger">*</span></label>
                                    <input className="form-control in" type="text" name="email" id="email" />
                                </div>
                                <div className="col-12 mb-4 col-md-4 form-group">
                                    <label className="lb" htmlFor="telefono">{t('telefono')}</label>
                                    <input className="form-control in" type="text" name="telefono" id="telefono" />
                                </div>
                                <div className="col-12 mb-4 col-md-4 form-group">
                                    <label className="lb" htmlFor="asunto">{t('compania')}</label>
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
                                    <label className="lb" htmlFor="comentarios">{t('comentarios')} <span className="text-danger">*</span></label>
                                    <textarea className="form-control tx" name="comentarios" id="comentarios" cols="30" rows="5"></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-send">{t('enviar')}</button>
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