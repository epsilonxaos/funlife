
import '../assets/scss/pages/services.scss';
import Servicios from '../components/servicios';

import TitulosSeccion from '../components/titulos';

const Services = () => {
    return(
        <div className="services">
            <div className="container">


                <div className="text-center">
                    <TitulosSeccion extra={""} title={"Services"} />
                </div>

                <Servicios />
                
            </div>
        </div>
    )
}

export default Services;