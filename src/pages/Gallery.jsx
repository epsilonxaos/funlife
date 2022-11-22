
import '../assets/scss/pages/gallery.scss';
import TitulosSeccion from '../components/titulos';
import MacyGallery from '../components/macyGallery';
import { motion } from "framer-motion"

const Gallery = () => {
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="galeria">
            <div className="container text-center">
                <TitulosSeccion title={"Gallery"} />

                <div className="py-5">
                    <MacyGallery />
                </div>
            </div>
        </motion.div>
    )
}

export default Gallery;