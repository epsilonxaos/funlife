
import '../assets/scss/pages/gallery.scss';
import TitulosSeccion from '../components/titulos';
import MacyGallery from '../components/macyGallery';

const Gallery = () => {
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

export default Gallery;