import TitulosSeccion from "./titulos";
import MacyGallery from "./macyGallery";

const Galeria = () => {

    return(
        <div className="galeria py-5">
            <div className="container-fluid mw16 py5 text-center">
                <TitulosSeccion styleClass={"my-5"} extra={"Meet the"} title={"Gallery"} />

                <MacyGallery />
            </div>
        </div>
    )
}

export default Galeria;