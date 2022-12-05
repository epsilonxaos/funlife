import MacyGallery from '../components/macyGallery';
import TitulosSeccion from '../components/titulos';

import { motion } from "framer-motion"

import '../assets/scss/pages/about.scss';

import person from '../assets/img/person.jpg';
import { useData } from '../components/useData';

const About = () => {
    const {data} = useData('/api/portafolio');

    if(!data) return 'loading gallery';

    const dataMacy = {gallery: data, tipo: 'portafolio'};

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


                    <div className="row justify-content-center pt-5 mb-5 pb-5">
                        <div className="col-12 mb-4 text-justify">
                            <p>For over 15 years FunLIFE has provided first-class corporate event planning and travel services throughout Mexico and Latin America. We specialize in organizing and producing small, medium and large events for luxury and premium brands.</p>
                            <p>FunLIFE creates and produces in-person events that transcend and inspire, such as corporate conventions, meetings and conferences, product launches, executive VIP events, team-building programs, and incentive trips.</p>
                            <p>FunLIFE strives to truly understands the needs of our clients and we do that by first getting to know them as partners who can trust that we are by their side to strategize, design, and execute their vision like no one else in the industry.</p>
                            <p>FunLIFE’s years of experience, deep institutional knowledge and network allows us to source, contract and manage the best local resources and talent throughout Mexico and the LATAM region. This can be a significant benefit and advantage when managing all the working pieces and intricacies of planning and budgeting an event of any size. We aim to take the pressure off our client’s shoulders and replace it with an unforgettable experience — from beginning to end.</p>
                            <p>Complementing our corporate event planning services is our corporate travel and accommodations services. As a certified travel agency, our trained agents can book and arrange both air and ground travel and the necessary accommodations. This combination of travel and event services is something that makes FunLIFE unique and special. Our full-service event planning and travel services will take care of all the hassle of travel, hotel accommodations, as well as the total event management and production. FunLIFE is the premier corporate event planning agency you want by your side this side of the hemisphere.</p>
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
                    <TitulosSeccion title={"Portafolio"} />

                    <div className="py-5">
                        <MacyGallery {...dataMacy} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;