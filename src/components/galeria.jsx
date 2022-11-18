import TitulosSeccion from "./titulos";
import MacyGallery from "./macyGallery";

const Galeria = () => {

    return(
        <div className="galeria">
            <div className="container text-center">
                <TitulosSeccion title={"Gallery"} />

                <div className="py-5">
                    <MacyGallery />
                </div>
            </div>
        </div>
    )
}

export default Galeria;