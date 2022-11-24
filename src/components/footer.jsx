import SocialMedia from './socialMedia';

import logo from '../assets/img/logo/FunLIFE-01.svg';
import estrellas from '../assets/img/estrellas-bln.png';
import TitulosSeccion from './titulos';

const footer = () => {

    const iframeInstagram = `<iframe src="https://snapwidget.com/embed/1016316" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width: 100%; height:510px"></iframe>`;
    return(
        <footer className="pt-5 pb-3">
            <div className="container">
                <div className="row mb-3 text-center justify-content-center">
                    <div className="col-12">

                        <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row text-uppercase mb-4">
                            <img src={estrellas} alt="Estrellas instagram" className="mr-3" />
                            <span><TitulosSeccion styleClass={'titulo-small'} title={'@funlife.travelandevents'} /></span>
                        </div>
                        <div className="App" dangerouslySetInnerHTML={{__html: iframeInstagram}}></div>
                    </div>
                    <div className="col-12 col-md-10 col-lg-8 pt-4">
                        <p className="mb-0">Ipsum ullamco mollit cillum eu aliquip laborum do sit duis nulla labore. 
                            Anim minim nisi aliqua quis.</p>
                        <p className="mb-4">Consequat nostrud fugiat qui quis esse ea 
                            veniam magna.</p>
                        <p>Reprehenderit ipsum deserunt est dolore.</p>
                    </div>
                </div>

                <div className="row align-items-center ">
                    <div className="col-6 order-1">
                        <a href="mailto:info@funlifeinternational.com">info@funlifeinternational.com</a>
                    </div>
                    <div className="col-6 order-2 text-right">
                        <SocialMedia />
                    </div>

                    <div className="col-12 order-3"><hr /></div>

                    <div className="col-12 col-md-5 col-lg-6 order-5 order-md-4 text-center text-md-left">
                        <p className="font-weight-bold small">ALL RIGHTS RESERVED © 2022 | FUNLIFE INTERNATIONAL</p>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-4 order-md-5 text-center text-md-right">
                        <p className="font-weight-bold small">
                            <a href="tel:+525552118874" className="mr-3"><i className="fa fa-phone mr-1" aria-hidden="true"></i>Mexico <span className="text-dorado">55 52 11 88 74</span></a>
                            <a href="tel:+18024884166"><i className="fa fa-phone mr-1" aria-hidden="true"></i>U.S.A <span className="text-dorado">802 488 41 66</span></a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer;