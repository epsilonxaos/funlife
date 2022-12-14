
import '../assets/scss/pages/services.scss';
import Servicios from '../components/servicios';
import { useTranslation } from 'react-i18next';
import TitulosSeccion from '../components/titulos';
import { motion } from "framer-motion"

const Services = () => {
    const { t } = useTranslation();

    return(
        <motion.div
            data-scroll-section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="services">
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
        </motion.div>
    )
}

export default Services;