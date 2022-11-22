import MacyGallery from '../components/macyGallery';
import TitulosSeccion from '../components/titulos';

import { motion } from "framer-motion"

import '../assets/scss/pages/about.scss';

const About = () => {
    return(
        <motion.div 
        
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="about">
            <div className="container">
                <div className="aboutus">
                    <div className="text-center">
                        <TitulosSeccion extra={"Meet the"} title={"FunLife Family"} />
                    </div>


                    <div className="row justify-content-center pt-5 mb-5">
                        <div className="col-12 mb-4">
                            <p>FunLIFE specializes in organizing and planning conventions and group events for luxury and premium brands. For over 15 years, the agency has provided a first-class full-service that takes care of all the group travel, accommodations, and event management and production needs from beginning -to-end.</p>
                        </div>

                        <div className="col-12 col-md-6">
                            <h6 className="font-weight-bold text-dorado">CORPORATE AND GROUP TRAVEL</h6>
                            <p>Our clients receive personalized services aimed to take care of all the hassle and stress with transporting and accommodating groups. Let us get your travelers mobilized and settled with first class care! We take care of ticket purchase, reservation confirmation, seat assignments, and payment for service for almost any size group.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <h6 className="font-weight-bold text-dorado">CORPORATE EVENTS AND CONVENTIONS</h6>
                            <p>Our  event planning and production support is full-service.  just tell us what, where, when, and for how many and we will make it happen!</p>
                            <p>FunLIFE finds and secures venue spaces such as: 5-star hotels and resorts, private homes and gardens, halls, museums, restaurants, bars, mansions, haciendas, castles, beach parks, etc... specialize in creating the perfect atmosphere by planning and managing all audiovisual, lighting, furniture, fixtures and floral arrangements and equipment.</p>
                        </div>
                    </div>
                </div>


                {/* PORTAFOLIO */}
                <div className="portafolio text-center">
                    <TitulosSeccion title={"Portafolio"} />

                    <div className="py-5">
                        <MacyGallery />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;