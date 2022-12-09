import MacyGallery from '../components/macyGallery';
import TitulosSeccion from '../components/titulos';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"

import '../assets/scss/pages/about.scss';

import person from '../assets/img/person.jpg';
import { useData } from '../components/useData';

import { AnimatePresence } from 'framer-motion';
import Loading from './Loading';

const About = () => {
    const {data} = useData('/api/portafolio');
    const { t } = useTranslation();

    if (!data) return <AnimatePresence><Loading /></AnimatePresence> ;

    const dataMacy = {gallery: data, tipo: 'portafolio'};

    return(
        <motion.div 
            data-scroll-section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="about">
            <div className="container">
                <div className="aboutus">
                    <div
                        className="text-center"
                        data-scroll
                        data-scroll-speed="2"
                        data-scroll-position="0"
                    >
                        <TitulosSeccion extra={t('familia_sup')} title={t('familia')} />
                    </div>


                    <div className="row justify-content-center pt-5 mb-5 pb-5">
                        <div className="col-12 mb-4 text-justify">
                            <div data-scroll data-scroll-speed="2" data-scroll-position="left" data-scroll-delay="0.1" > <p>{t('nosotros_textos.0')}</p> </div>
                            <div data-scroll data-scroll-speed="2" data-scroll-position="left" data-scroll-delay="0.2" > <p>{t('nosotros_textos.1')}</p> </div>
                            <div data-scroll data-scroll-speed="2" data-scroll-position="left" data-scroll-delay="0.3" > <p>{t('nosotros_textos.2')}</p> </div>
                            <div data-scroll data-scroll-speed="2" data-scroll-position="left" data-scroll-delay="0.4" > <p>{t('nosotros_textos.3')}</p> </div>
                            <div data-scroll data-scroll-speed="2" data-scroll-position="left" data-scroll-delay="0.5" > <p>{t('nosotros_textos.4')}</p> </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div
                                data-scroll
                                data-scroll-speed="1"
                                data-scroll-position="top"
                                data-scroll-delay="0.7"
                                >
                                <h6 className="font-weight-bold text-dorado">{t('nosotros_textos.5')}</h6>
                                <p>{t('nosotros_textos.6')}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div
                                data-scroll
                                data-scroll-speed="1"
                                data-scroll-position="top"
                                data-scroll-delay="0.7"
                                >
                            <h6 className="font-weight-bold text-dorado">{t('nosotros_textos.7')}</h6>
                            <p>{t('nosotros_textos.8')}</p>
                            <p>{t('nosotros_textos.9')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 mb-3">
                            <div className="equipo text-center">
                                <div className="bg mb-4 not-hover" style={{backgroundImage: `url(${person})`}}></div>
                                <p>Ronal Hernandez</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-3">
                            <div className="equipo text-center">
                                <div className="bg mb-4 not-hover" style={{backgroundImage: `url(${person})`}}></div>
                                <p>Ronal Hernandez</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-3">
                            <div className="equipo text-center">
                                <div className="bg mb-4 not-hover" style={{backgroundImage: `url(${person})`}}></div>
                                <p>Ronal Hernandez</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* PORTAFOLIO */}
                <div className="portafolio text-center">
                    <div
                        className="text-center"
                        data-scroll
                        data-scroll-speed="1"
                        data-scroll-position="-120"
                        data-scroll-direction="horizontal"

                    >
                        <TitulosSeccion title={"Portafolio"} />
                    </div>

                    <div className="py-5">
                        <MacyGallery {...dataMacy} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;