
import '../assets/scss/pages/home.scss';
import { useEffect, useState } from 'react';

import VideoPortada from "../components/videoPortada";
import QuienesSomos from '../components/quienesSomos';
import Servicios from '../components/servicios';
import Galeria from '../components/galeria';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Loading from './Loading';
import { useData } from '../components/useData';

import TitulosSeccion from '../components/titulos';

const Home = ({videos}) => {
	const dataVideo = videos;
    const { t } = useTranslation();
	const {data} = useData('galeria');
	
    if (!data) return <Loading /> ;

    const dataGaleria = {galeria: data};

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="home"
            data-scroll-section
        >
            <VideoPortada {...dataVideo}/>
            
            <QuienesSomos />
            
            <div className="services">
                <div className="container">


                    <div
                        className="text-center"
                        data-scroll
                        data-scroll-speed="3"
                        data-scroll-position="0"
                    >
                        <TitulosSeccion title={t('servicios')} />
                    </div>

                    <Servicios />
                    
                </div>
            </div>

            <Galeria {...dataGaleria}/>
        </motion.div>
    )
}

export default Home;