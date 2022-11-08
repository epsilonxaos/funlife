import { Link } from 'react-router-dom';
import SocialMedia from './socialMedia';

const header = () => {
    return (
        <>
            <header>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-6 col-md-4 d-none d-md-block">
                            <SocialMedia />
                        </div>
                        <div className="col-6 col-md-4 text-md-center">
                            <ul className="list-unstyled mb-0 p-0">
                                <li><Link to="/">FUNLIFE</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 text-right">
                            <div className="menu menu-3" data-toggle="modal" data-target="#mdMenu">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>                
            </header>

            <div className="modal fade" id="mdMenu">
                <div className="modal-dialog m-0">
                    <div className="modal-content">
                        <div className="modal-body pt-5">
                            <ul className="list-unstyled text-center pt-5">
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/">SERVICES</Link></li>
                                <li><Link to="/">ABOUT</Link></li>
                                <li><Link to="/">GALLERY</Link></li>
                                <li><Link to="/">CONTACT</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default header;