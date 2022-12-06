import TitulosSeccion from "./titulos";
import { useTranslation } from 'react-i18next';

const QuienesSomos = () => {
	const { t } = useTranslation();

    return (
        <div className="quienesSomos">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-11 col-xl-10">
                        {/* <h1>FUNLIFE INTERNATIONAL</h1> */}
                        <div
                            data-scroll
                            data-scroll-speed="2"
                            data-scroll-position="top"
                        >
                            <TitulosSeccion extra={""} title={"TRAVEL AND EVENTS"} />
                        </div>
                        <div
                            data-scroll
                            data-scroll-speed="1"
                            data-scroll-position="top"
                        >
                            <p>{t('home.intro_text')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuienesSomos;