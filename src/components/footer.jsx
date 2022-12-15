import SocialMedia from './socialMedia';
import TitulosSeccion from './titulos';
import { useTranslation } from 'react-i18next';
import logo from '../assets/img/logo/FunLIFE-01.svg';
import estrellas from '../assets/img/estrellas-bln.png';

const footer = ({sociales, correo, telefonos}) => {
    const { t } = useTranslation();

    return(
        <footer className="pt-5 pb-3"
            data-scroll-section
        >
            <div className="container"
                data-scroll
                data-scroll-position="0"
            >
                <div className="row mb-3 text-center justify-content-center">
                    <div className="col-12 pb-5">

                        {/* <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row mb-4">
                            <img src={estrellas} alt="Estrellas instagram" className="mr-3" width={"35px"} />
                            <span><h3>@funlife.travelandevents</h3></span>
                        </div> */}
						
						{/* <ul className="juicer-feed" data-feed-id="shogunepsiln" data-origin="embed-code" data-per="6" data-columns="3">
							<h1 className="referral"><a id="titleInst" href="https://www.juicer.io">Powered by Juicer.io</a></h1>
						</ul> */}
                    </div>
                    <div className="col-12 col-md-10 col-lg-8 pt-5 pb-5">
                        <p className="mb-4 extra">{t('footer.texto')}</p>
                    </div>
                </div>

                <div className="row align-items-center pt-5">
                    <div className="col-6 order-1">
                        <a href={`mailto:${correo}`}>{correo}</a>
                    </div>
                    <div className="col-6 order-2 text-right">
                        <SocialMedia {...sociales} />
                    </div>

                    <div className="col-12 order-3"><hr /></div>

                    <div className="col-12 col-md-5 col-lg-6 order-5 order-md-4 text-center text-md-left">
                        <p className="font-weight-bold small">{t('footer.derechos')} © 2022 | FUNLIFE INTERNATIONAL</p>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-4 order-md-5 text-center text-md-right">
                        <p className="font-weight-bold small">
                            <a href={`tel:+52${telefonos.mx}`} className="mr-3"><i className="fa fa-phone mr-1" aria-hidden="true"></i>Mexico <span className="text-dorado">{telefonos.mx}</span></a>
                            <a href={`tel:+1${telefonos.usa}`}><i className="fa fa-phone mr-1" aria-hidden="true"></i>U.S.A <span className="text-dorado">{telefonos.usa}</span></a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer;