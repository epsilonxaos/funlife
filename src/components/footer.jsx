import SocialMedia from './socialMedia';

import logo from '../assets/img/logo/FunLIFE-01.svg';


const footer = () => {

    const iframeInstagram = `<iframe src="https://snapwidget.com/embed/1016316" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:765px; height:510px"></iframe>`;
    return(
        <footer className="pt-5 pb-3">
            <div className="container">
                <div className="row mb-3 text-center justify-content-center">
                    <div className="col-12">
                        <div style={{
                            backgroundImage: `url(${logo})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '160%',
                            backgroundPosition: 'center',
                            width: '240px',
                            height: '110px',
                        }}
                        className="mx-auto mb-3"
                        >
                            {/* <img src="" alt="FUNLIFE INTERNATIONAL" className="mb-4" /> */}
                        </div>

                        <div className="App" dangerouslySetInnerHTML={{__html: iframeInstagram}}></div>
                    </div>
                    <div className="col-12 col-md-8">
                        <p className="mb-0">Ipsum ullamco mollit cillum eu aliquip laborum do sit duis nulla labore. 
                            Anim minim nisi aliqua quis.</p>
                        <p className="mb-4">Consequat nostrud fugiat qui quis esse ea 
                            veniam magna.</p>
                        <p>Reprehenderit ipsum deserunt est dolore.</p>
                    </div>
                </div>

                <div className="row align-items-center ">
                    <div className="col-6">
                        <a href="mailto:info@funlifeinternational.com">info@funlifeinternational.com</a>
                    </div>
                    <div className="col-6 text-right">
                        <SocialMedia />
                    </div>
                    <div className="col-12"><hr /></div>
                    <div className="col-6">
                        <p className="font-weight-bold small">ALL RIGHTS RESERVED © 2022 | FUNLIFE INTERNATIONAL</p>
                    </div>
                    <div className="col-6 text-right">
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