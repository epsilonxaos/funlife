const socialMedia = ({instagram, titleShow}) => {
    return(
        <>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                {
                    titleShow ?
                        <span className="small d-none d-lg-inline-block position-relative ml-1" style={{top: "-1px"}}>@FUNLIFE.TRAVELANDEVENTS</span>
                    : <></>
                }
            </a>
        </>
    )
}


export default socialMedia;