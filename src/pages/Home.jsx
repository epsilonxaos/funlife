
import '../assets/scss/pages/home.scss';

import VideoPortada from "../components/videoPortada";
import QuienesSomos from '../components/quienesSomos';
import Servicios from '../components/servicios';
import Galeria from '../components/galeria';

const Home = () => {
    return(
        <>
            <VideoPortada />
            <QuienesSomos />
            <Servicios />
            <Galeria />
        </>
    )
}

export default Home;