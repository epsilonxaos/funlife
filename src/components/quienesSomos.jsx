import TitulosSeccion from "./titulos";


const QuienesSomos = () => {
    return (
        <div className="quienesSomos">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 col-xl-8">
                        {/* <h1>FUNLIFE INTERNATIONAL</h1> */}
                        <TitulosSeccion extra={""} title={"FunLIFE International"} />
                        <p>
                            specializes in organizing and planning conventions and group events for luxury and premium brands.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuienesSomos;