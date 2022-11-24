import video from '../assets/video/prueba.mp4'

const VideoPortada = () => {
    // const url = 'https://player.vimeo.com/external/335843465.hd.mp4?s=7cd516de00bde25b7f685fe8ccc138c46db130d5&profile_id=175'
    return(
        <div className="videoPortada">
            {/* Movil */}
            {/* <video autoPlay loop muted className="d-md-none">
                <source src={url} type="video/mp4" />
            </video> */}

            {/* Escritorio */}
            <video autoPlay loop muted className="d-none d-md-block">
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPortada;