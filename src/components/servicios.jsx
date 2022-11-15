import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper'
import 'swiper/css';
import 'swiper/css/effect-fade';

import imgService1 from '../assets/img/service1.jpg';
import imgService2 from '../assets/img/service2.jpg';

import TitulosSeccion from './titulos';

const Servicios = () => {
    return(
        <div className="servicios py-5">
            <div className="container-fluid mw16 py-5 overflow-hidden">
                
                <TitulosSeccion extra={"Meet the"} title={"Services"} />
                
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    className="mneg"
                    modules={[EffectFade]}
                    effect="fade"
                >
                    <SwiperSlide>
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <img src={imgService1} alt="Conventions and Events" />
                            </div>
                            <div className="col-12 col-lg-4 content">
                                <h2 className="titlee mb-4 mt-4">Conventions and Events</h2>
                                <p>FunLIFE agents will work tirelessly to find and secure the perfect venue and space for your event.</p>
                                <p>5-star hotels and resorts, private homes and gardens, halls, museums, restaurants, bars, mansions, haciendas, castles, beach parks, etc...</p>
                                <p>We specialize in creating the perfect atmosphere by planning and managing all audiovisual, lighting, furniture, fixtures and floral arrangements and equipment.</p>
                                <p>We can organize Photo and Video event coverage, DJs or any other kind of live entertainment including concert or other live musical performance.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row">
                            <div className="col-12 col-lg-8">
                            <img src={imgService2} alt="Travel Services" />
                            </div>
                            <div className="col-12 col-lg-4 content">
                                <div className="titlee mb-4 mt-4">Travel Services</div>
                                <p>We take care of ticket purchase, reservation confirmation, seat assignments, and payment for service for almost any size group.</p>
                                <p>We strive to be with our passengers every step of the way, from the moment they step out of home until they step back in.</p>
                                <p>Our travel services include airline ticket purchase and private or public ground transport facilitation, to get you to where you want to go.</p>  
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Servicios;