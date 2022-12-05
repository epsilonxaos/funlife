const socialMedia = ({instagram}) => {
    return(
        <>
        {console.log(instagram)}
            <a href={instagram} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
            {/* <a href="#" className="ml-3"><i className="fa fa-facebook" aria-hidden="true"></i></a> */}
        </>
    )
}


export default socialMedia;