import { useEffect, useState } from 'react';
import { NavLink, Link  } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import SocialMedia from './socialMedia';
import $ from 'jquery'

import { useLocomotiveScroll } from 'react-locomotive-scroll'

import logo from '../assets/img/logo-header.svg';
import btn from '../assets/img/estrellas-bln.png';

const header = ({sociales}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [lang, setLang] = useState('en');
    const { t } = useTranslation();
    const { scroll } = useLocomotiveScroll()

    function handlerClickMenu() {
        setOpenMenu(!openMenu);
        $('#root').toggleClass('overflow-hidden');
    }

    function handlerCloseMenu() {
        setOpenMenu(false);
        $('#mdMenu').modal('hide');
    }

    const changeBackground = (instance) => {
        if (instance.scroll.y >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        if(!scroll) return;
        scroll.on('scroll', (instance) => {
            changeBackground(instance)
            window.addEventListener("scroll", changeBackground(instance))
       });
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
                        <div className="col-6 col-md-4 text-right d-flex align-items-center justify-content-end">
							<ul className="list-unstyled d-flex align-items-center justify-content-center languaje mr-2 mr-md-4 small">
								<li><button className={`${lang === 'en' ? 'active' : ''}`} onClick={() => {i18next.changeLanguage('en'); setLang('en');}}>EN</button></li>
								<li className="px-1">/</li>
								<li><button className={`${lang === 'es' ? 'active' : ''}`} onClick={() => {i18next.changeLanguage('es'); setLang('es');}}>ES</button></li>
							</ul>
                            {
                                !openMenu ? 
                                    <img src={btn} className="btnStar" alt="Boton de menu" onClick={handlerClickMenu} data-toggle="modal" data-target="#mdMenu" />
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
                                <li><NavLink activeClassName="active" exact to="/" onClick={handlerCloseMenu}>{t('menu.home')}</NavLink></li>
                                <li><NavLink activeClassName="active" to="/services" onClick={handlerCloseMenu}>{t('menu.services')}</NavLink></li>
                                <li><NavLink activeClassName="active" to="/about" onClick={handlerCloseMenu}>{t('menu.about')}</NavLink></li>
                                <li><NavLink activeClassName="active" to="/gallery" onClick={handlerCloseMenu}>{t('menu.gallery')}</NavLink></li>
                                <li><NavLink activeClassName="active" to="/contact" onClick={handlerCloseMenu}>{t('menu.contact')}</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default header;