
import '../assets/scss/pages/services.scss';

import imgService1 from '../assets/img/service1.jpg';
import imgService2 from '../assets/img/service2.jpg';

import TitulosSeccion from '../components/titulos';

const Services = () => {
    return(
        <div className="py-5 services">
            <div className="container-fluid mw16 py-5">


                <div className="pt-5 text-center mt-3">
                    <TitulosSeccion extra={"Meet the"} title={"Services"} />
                </div>


                {/* Eventos */}
                <div className="row py-5 align-items-center mb-5">
                    <div className="col-12 col-md-6">
                        <div className="bg parallax mb-5" style={{backgroundImage: `url(${imgService1})`}}>
                            <img src={imgService1} alt="Conventions and Events" className="opacity" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pl-xl-5">
                        <h2 className="titlee mb-4 mt-4 text-center">Conventions and Events</h2>

                        <p className="mb-0">FunLIFE agents will work tirelessly to find and secure the perfect venue and space for your event such as:</p>
                        <p>5-star hotels and resorts, private homes and gardens, halls, museums, restaurants, bars, mansions, haciendas, castles, beach parks, etc...</p>

                        <p className="mb-0">We can arrange and provide any Catering service big or small</p>
                        <ul>
                            <li><p className="mb-1">provide any Drink/ Beverage Service</p></li>
                            <li><p className="mb-1">manage the rental of furniture and decorations of any kind</p></li>
                            <li><p className="mb-1">manage models and hostesses with specific talents and services</p></li>
                        </ul>

                        <p className="mb-0">We can provide personal security</p>
                        <ul>
                            <li> <p className="mb-1">arrange for media coverage including radio or television</p> </li>
                            <li> <p className="mb-1">arrange and manage celebrity appearance and performance</p> </li>
                        </ul>

                        <p className="mb-0">We specialize in creating the perfect atmosphere by planning and managing all audiovisual, lighting, furniture, fixtures and floral arrangements and equipment.</p>
                        <p>We can organize Photo and Video event coverage, DJs or any other kind of live entertainment including concert or other live musical performance.</p>
                    </div>
                </div>


                {/* Travel */}
                <div className="row py-5 align-items-center">
                    <div className="col-12 col-md-6 order-md-2">
                        <div className="bg parallax mb-5" style={{backgroundImage: `url(${imgService2})`}}>
                            <img src={imgService2} alt="Travel Services" className="opacity" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-md-1 pr-xl-5">
                        <h2 className="titlee mb-4 mt-4 text-center">Travel Services</h2>
                        <p>We take care of ticket purchase, reservation confirmation, seat assignments, and payment for service for almost any size group.</p>
                        <p>We strive to be with our passengers every step of the way, from the moment they step out of home until they step back in.</p>
                        <p>Our travel services include airline ticket purchase and private or public ground transport facilitation, to get you to where you want to go.</p>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;