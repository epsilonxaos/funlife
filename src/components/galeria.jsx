import { useEffect } from 'react';
import TitulosSeccion from "./titulos";
import fake from '@sigodenjs/fake'
import Macy from 'macy';

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
    breakAt: {
        940: 4,
        520: 3,
        400: 2
    }
}

const Galeria = () => {

    useEffect(() =>{
       new Macy(macyConfig);
    }, [])

    return(
        <div className="galeria py-5">
            <div className="container-fluid mw16 py5 text-center">
                <TitulosSeccion styleClass={"mt-5"} extra={"Meet the"} title={"Gallery"} />

                <div id="macy-container">
                    <div className="item"><img src="http://unsplash.it/557/387/" alt="Imagen test" /></div>
                    <div className="item"><img src="http://unsplash.it/602/660/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/660/646/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/741/375/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/813/455/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/470/896/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/664/653/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/708/313/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/738/578/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/458/482/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/439/856/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/549/315/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/877/693/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/542/805/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/683/445/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/616/340/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/533/317/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/700/894/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/663/541/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/368/575/" alt="" /></div>
                    <div className="item"><img src="http://unsplash.it/696/538/" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Galeria;