import '../assets/scss/pages/contact.scss';

import TitulosSeccion from '../components/titulos';

const Contact = () => {
    return (
        <div className="contacto">
            <div className="container">

                <div className="text-center">
                    <TitulosSeccion title={'Contact'} />
                </div>

                <div className="pt-5 text-center">
                    <p>En desarrollo ...</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;