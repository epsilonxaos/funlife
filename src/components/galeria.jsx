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
                <TitulosSeccion title={"Gallery"} />

                <div className="py-5">
                    <MacyGallery {...dataMacy} />
                </div>
            </div>
        </div>
    )
}

export default Galeria;