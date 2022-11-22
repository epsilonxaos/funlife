import '../assets/scss/pages/contact.scss';

import TitulosSeccion from '../components/titulos';
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="contacto">
            <div className="container">

                <div className="text-center">
                    <TitulosSeccion title={'Contact'} />
                </div>

                <div className="pt-5 text-center">
                    <p>En desarrollo ...</p>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;