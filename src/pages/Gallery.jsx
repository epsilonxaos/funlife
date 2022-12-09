
import '../assets/scss/pages/gallery.scss';
import TitulosSeccion from '../components/titulos';
import MacyGallery from '../components/macyGallery';
import { motion } from "framer-motion"
import { useData } from '../components/useData';
import { useTranslation } from 'react-i18next';

import { AnimatePresence } from 'framer-motion';
import Loading from './Loading';

const Gallery = () => {
    const {data} = useData('/api/galeria');
    const { t } = useTranslation();

    if (!data) return <AnimatePresence mode="wait"><Loading /></AnimatePresence> ;

    const dataMacy = {gallery: data, tipo: 'galeria'};

    return(
        <motion.div
            data-scroll-section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
			className="galeria">
            <div className="container text-center">
                <div
                    className="text-center"
                    data-scroll
                    data-scroll-speed="1"
                    data-scroll-position="-120"
                    data-scroll-direction="horizontal"

                >
                    <TitulosSeccion title={t('galeria')} />
                </div>

                <div className="py-5">
                    <MacyGallery {...dataMacy} />
                </div>
            </div>
        </motion.div>
    )
}

export default Gallery;