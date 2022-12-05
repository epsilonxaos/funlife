import { useEffect, useState } from 'react';
import { NavLink, Link  } from 'react-router-dom';
import SocialMedia from './socialMedia';
import $ from 'jquery'

import logo from '../assets/img/logo-header.svg';
// import logo from '../assets/img/logo/FunLIFE-04.svg';
import btn from '../assets/img/estrellas-bln.png';

const header = ({sociales}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [navbar, setNavbar] = useState(false)

    function handlerClickMenu() {
        setOpenMenu(!openMenu);
        $('#root').toggleClass('overflow-hidden');
    }

    function handlerCloseMenu() {
        setOpenMenu(false);
        $('#mdMenu').modal('hide');
    }

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    });

    return (
        <>
            <header className={`${navbar ? 'active' : ''} ${openMenu ? 'transparent' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-4 d-none d-md-block">
                            <SocialMedia {...sociales} />
                        </div>
                        <div className="col-6 col-md-4 text-md-center">
                            <ul className="list-unstyled mb-0 p-0">
                                <li>
                                    <Link to="/">
                                        <div style={{ backgroundImage: `url(${logo})`, }} className="mx-auto logo" ></div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 text-right">
                            {
                                !openMenu ? 
                                    <img src={btn} width="35px" style={{userSelect: 'none', cursor: 'pointer'}} alt="Boton de menu" onClick={handlerClickMenu} data-toggle="modal" data-target="#mdMenu" />
                                :
                                <div className={`menu menu-3 active`} onClick={handlerClickMenu} data-toggle="modal" data-target="#mdMenu">
                                    <span></span>
                                </div>
                            }
                        </div>
                    </div>
                </div>                
            </header>

            <div className="modal fad p-0" id="mdMenu">
                <div className="modal-dialog m-0">
                    <div className="modal-content">
                        <div className="modal-body pt-5">
                            <ul className="list-unstyled text-center pt-5 menu-lista">
                                <li><NavLink activeClassName="active" exact to="/" onClick={handlerCloseMenu}>HOME</NavLink></li>
                                <li><NavLink activeClassName="active" to="/services" onClick={handlerCloseMenu}>SERVICES</NavLink></li>
                                <li><NavLink activeClassName="active" to="/about" onClick={handlerCloseMenu}>ABOUT</NavLink></li>
                                <li><NavLink activeClassName="active" to="/gallery" onClick={handlerCloseMenu}>GALLERY</NavLink></li>
                                <li><NavLink activeClassName="active" to="/contact" onClick={handlerCloseMenu}>CONTACT</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default header;