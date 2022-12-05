
import '../assets/scss/pages/gallery.scss';
import TitulosSeccion from '../components/titulos';
import MacyGallery from '../components/macyGallery';
import { motion } from "framer-motion"
import { useData } from '../components/useData';

const Gallery = () => {
    const {data} = useData('/api/galeria');

    if(!data) return 'loading gallery';

    const dataMacy = {gallery: data, tipo: 'galeria'};

    return(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="galeria">
            <div className="container text-center">
                <TitulosSeccion title={"Gallery"} />

                <div className="py-5">
                    <MacyGallery {...dataMacy} />
                </div>
            </div>
        </motion.div>
    )
}

export default Gallery;