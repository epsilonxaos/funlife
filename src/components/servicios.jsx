import imgService1 from '../assets/img/service1.jpg';
import imgService2 from '../assets/img/service2.jpg';
import { useTranslation } from 'react-i18next';

const Servicios = () => {

    const { t } = useTranslation();

    return(
        <>
            {/* Eventos */}
            <div className="row py-5 align-items-center mb-5">
                <div className="col-12 col-lg-6 overflow-hidden">
                    <div
                        className="bg parallax mb-5 not-hover" style={{backgroundImage: `url(${imgService1})`}}>
                        <img src={imgService1} alt="Conventions and Events" className="opacity" />
                    </div>
                </div>
                <div className="col-12 col-lg-6 pl-xl-5">
                    <div
                    data-scroll
                    data-scroll-speed="2"
                    data-scroll-position="-10"
                    >
                        <h2 className="titlee mb-4 mt-4 text-center">{t('eventos_titulo')}</h2>

                        <p className="mb-0">{t('eventos_textos.0')}</p>
                        <p>{t('eventos_textos.1')}</p>

                        <p className="mb-0">{t('eventos_textos.2')}</p>
                        <ul>
                            <li><p className="mb-1">{t('eventos_textos.3')}</p></li>
                            <li><p className="mb-1">{t('eventos_textos.4')}</p></li>
                            <li><p className="mb-1">{t('eventos_textos.5')}</p></li>
                        </ul>

                        <p className="mb-0">{t('eventos_textos.6')}</p>
                        <ul>
                            <li> <p className="mb-1">{t('eventos_textos.7')}</p> </li>
                            <li> <p className="mb-1">{t('eventos_textos.8')}</p> </li>
                        </ul>

                        <p className="mb-0">{t('eventos_textos.9')}</p>
                        <p>{t('eventos_textos.10')}</p>

                    </div>
                </div>
            </div>


            {/* Travel */}
            <div className="row py-5 align-items-center">
                <div className="col-12 col-lg-6 order-lg-2">
                    <div className="bg parallax mb-5 not-hover" style={{backgroundImage: `url(${imgService2})`}}>
                        <img src={imgService2} alt="Travel Services" className="opacity" />
                    </div>
                </div>
                <div className="col-12 col-lg-6 order-lg-1 pr-xl-5">
                    <div
                        data-scroll
                        data-scroll-speed="2"
                        data-scroll-position="-10"
                    >
                        <h2 className="titlee mb-4 mt-4 text-center">{t('viajes_titulo')}</h2>
                        <p>{t('viajes_textos.0')}</p>
                        <p>{t('viajes_textos.1')}</p>
                        <p>{t('viajes_textos.2')}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Servicios;