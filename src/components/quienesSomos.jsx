import TitulosSeccion from "./titulos";


const QuienesSomos = () => {
    return (
        <div className="quienesSomos">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-11 col-xl-10">
                        {/* <h1>FUNLIFE INTERNATIONAL</h1> */}
                        <TitulosSeccion extra={""} title={"TRAVEL AND EVENTS"} />
                        <p>
                            We specialize in specializes in organizing and planning conventions and group events for luxury and premium brands.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuienesSomos;