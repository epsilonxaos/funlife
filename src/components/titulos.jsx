const TitulosSeccion = ({extra, title, styleClass}) => {
    return (
        <h1 className={styleClass}>
            <span className="title">
                <span className="extraTitle">{extra}</span>
                {title}
            </span>
        </h1>
    );
}

export default TitulosSeccion;