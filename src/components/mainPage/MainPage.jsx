import { Link } from "react-router-dom";
import Header from "../header/Header";
import "./MainPage.css"


const MainPage = () => {
    return (
        <div className="main__body">
            <Header />
            <div className="inner">
                <div className="main__content">
                    <div className="main__h1">
                        <span className="main__h1-logo">Play Vision</span>
                        <span className="main__h1-text">AI-распознавание</span>
                    </div>
                    <span className="main__content-text">Наши технологии позволяют проанализировать видео и <br />распознать самое главное в области спорта</span>
                    <div className="main__btns">
                        <Link className="btn-start" to="/play">Начать</Link>
                        <Link className="btn-ecosystem" to='/ecosystem'>Экосистема</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;