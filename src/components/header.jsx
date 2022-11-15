import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from './socialMedia';
import $ from 'jquery'

import logo from '../assets/img/logo/FunLIFE-04.svg';

const header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    function handlerClickMenu() {
        setOpenMenu(!openMenu);
    }

    function handlerCloseMenu() {
        setOpenMenu(false);
        $('#mdMenu').modal('hide');
    }

    return (
        <>
            <header>
                <div className="container py-3">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-4 d-none d-md-block">
                            <SocialMedia />
                        </div>
                        <div className="col-6 col-md-4 text-md-center">
                            <ul className="list-unstyled mb-0 p-0">
                                <li><Link to="/">
                                    <div style={{
                                        backgroundImage: `url(${logo})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '160%',
                                        backgroundPosition: 'center',
                                        width: '240px',
                                        height: '60px',
                                    }}
                                    className="mx-auto"
                                    >
                                        {/* <img src={logo} alt="FunLife" style={{backgroundImage: `url(${logo})`}} />     */}
                                    </div>
                                </Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 text-right">
                            <div className={`menu menu-3 ${openMenu ? 'active' : ''}`} onClick={handlerClickMenu} data-toggle="modal" data-target="#mdMenu">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>                
            </header>

            <div className="modal fad p-0" id="mdMenu">
                <div className="modal-dialog m-0">
                    <div className="modal-content">
                        <div className="modal-body pt-5">
                            <ul className="list-unstyled text-center pt-5">
                                <li><Link to="/" onClick={handlerCloseMenu}>HOME</Link></li>
                                <li><Link to="/services" onClick={handlerCloseMenu}>SERVICES</Link></li>
                                <li><Link to="/about" onClick={handlerCloseMenu}>ABOUT</Link></li>
                                <li><Link to="/gallery" onClick={handlerCloseMenu}>GALLERY</Link></li>
                                <li><Link to="/contact" onClick={handlerCloseMenu}>CONTACT</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default header;