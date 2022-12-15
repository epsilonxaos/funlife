import { useEffect } from 'react';
import Macy from 'macy';
import baseURL from './api';
import SimpleLightbox from 'simple-lightbox';
import 'simple-lightbox/dist/simpleLightbox.min.css';


const MacyGallery = ({gallery, tipo}) => {
    const handlerClickEvent = async(id) => {
        const data = await (await fetch(`${baseURL}api/${tipo}/${id}`)).json();
        var lightbox;

        if(!data) return false;

        const imgs = [];

        data.map(item => { imgs.push(baseURL + item.img)})
        
        lightbox = SimpleLightbox.open({
            items: imgs
        });
    }
    let breaks
    if(tipo === 'portafolio'){
        breaks ={
            940: 2,
            520: 2,
            400: 2
        }
    } else {
        breaks ={
            940: 4,
            520: 3,
            400: 2
        }
    }

    const macyConfig = {
        container: '#macy-container',
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        debug: true,
        mobileFirst: true,
        columns: 1,
        margin: {
            y: 16,
            x: '2%',
        },
        breakAt: breaks
    }

    useEffect(() =>{
       new Macy(macyConfig);

       if(tipo !== 'portafolio') {
            new SimpleLightbox({elements: '#macy-container a'});
        }
    }, []);

    
    return(
        <div id="macy-container">
            {
                gallery.map(photo => {
                    const imgAlt = photo.nombre ? photo.nombre : 'Imagen de galeria';
                    const addEvent = (photo.collapseGallery > 0) ? true : false;

                    return(
                        <div className="item" key={`galeria-${photo.id}`}>
                            {
                                tipo !== 'portafolio' ?
                                <a href={baseURL + photo.cover} title="Gallery">
                                    <img src={baseURL + photo.cover} alt={imgAlt} />
                                </a>
                                :
                                <img className={!addEvent ? 'not-pointer' : ''} src={baseURL + photo.cover} alt={imgAlt} {...(addEvent && {onClick: () => {handlerClickEvent(photo.id)}})} />
                            }
                        </div>
                    );
                })
            }
        </div>
    )
}

export default MacyGallery;