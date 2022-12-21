import { useState } from 'react';
import baseURL from './api';

const VideoPortada = ({desk, movil, setLoad}) => {
    // const url = 'https://player.vimeo.com/external/335843465.hd.mp4?s=7cd516de00bde25b7f685fe8ccc138c46db130d5&profile_id=175'
	const [loadCount, setLoadCount] = useState(0);

	const setVideoLoaded = () => {
		setLoadCount(loadCount + 1);
		if (loadCount <= 2) {
			console.log("video loaded");
			setLoad();
		}

		console.log(loadCount);
	};

    return(
        <div className="videoPortada">
            {/* Movil */}
            {
                movil ?
                    <video 
						autoPlay
						playsInline
						loop
						muted
						className="d-md-none"
						onLoadedData={() => {
							setVideoLoaded();
						}}
					>
                        <source src={baseURL + movil} type="video/mp4" />
                    </video>
                : <></>
            }

            {/* Escritorio */}
            {
                desk ? 
                    <video 
						autoPlay
						playsInline
						loop
						muted
						className="d-none d-md-block"
						onLoadedData={() => {
							setVideoLoaded();
						}}
					>
                        <source src={baseURL + desk} type="video/mp4" />
                    </video>
                : <></>
            }
        </div>
    )
}

export default VideoPortada;