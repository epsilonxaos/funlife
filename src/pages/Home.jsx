
import '../assets/scss/pages/home.scss';

import VideoPortada from "../components/videoPortada";
import QuienesSomos from '../components/quienesSomos';
import Servicios from '../components/servicios';
import Galeria from '../components/galeria';

import { motion } from "framer-motion"

import TitulosSeccion from '../components/titulos';

const Home = () => {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="home">
            <VideoPortada />
            <QuienesSomos />

            <div className="services">
                <div className="container">


                    <div className="text-center ">
                        <TitulosSeccion title={"Services"} />
                    </div>

                    <Servicios />
                    
                </div>
            </div>
            <Galeria />
        </motion.div>
    )
}

export default Home;