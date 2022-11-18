
import '../assets/scss/pages/home.scss';

import VideoPortada from "../components/videoPortada";
import QuienesSomos from '../components/quienesSomos';
import Servicios from '../components/servicios';
import Galeria from '../components/galeria';

import TitulosSeccion from '../components/titulos';

const Home = () => {
    return(
        <div className="home">
            <VideoPortada />
            <QuienesSomos />

            <div className="services">
                <div className="container">


                    <div className="text-center ">
                        <TitulosSeccion title={"Services"} />
                    </div>

                    <Servicios />
                    
                </div>
            </div>
            <Galeria />
        </div>
    )
}

export default Home;