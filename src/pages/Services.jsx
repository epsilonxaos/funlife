
import '../assets/scss/pages/services.scss';
import Servicios from '../components/servicios';

import TitulosSeccion from '../components/titulos';
import { motion } from "framer-motion"

const Services = () => {
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="services">
            <div className="container">


                <div className="text-center">
                    <TitulosSeccion extra={""} title={"Services"} />
                </div>

                <Servicios />
                
            </div>
        </motion.div>
    )
}

export default Services;