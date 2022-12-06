import TitulosSeccion from "./titulos";
import MacyGallery from "./macyGallery";
import { useData } from "./useData";


const Galeria = () => {
    const {data} = useData('/api/galeria');

    if(!data) return 'loading gallery';

    const dataMacy = {gallery: data, tipo: 'galeria'};

    return(
        <div className="galeria">
            <div className="container text-center">
                    <div
                        className="text-center"
                        data-scroll
                        data-scroll-speed="1"
                        data-scroll-position="-120"
                        data-scroll-direction="horizontal"

                    >
                        <TitulosSeccion title={"Gallery"} />
                    </div>

                <div className="py-5">
                    <MacyGallery {...dataMacy} />
                </div>
            </div>
        </div>
    )
}

export default Galeria;