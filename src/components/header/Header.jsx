import "./Header.css"
import {Link} from "react-router-dom"
import logo from "./../../images/PlayVision.png"
import mdi_github from "./../../images/mdi_github.png"
import mdi_discord from "./../../images/mdi_discord.png"
import mdi_reddit from "./../../images/mdi_reddit.png"
import mdi_twitter from "./../../images/mdi_twitter.png"

const Header = () => {
    return (
        <>
            <div className="inner">
                <div className="header__container">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="header__menu">
                        <Link to="/error">Новости</Link>
                        <Link>Сервисы</Link>
                        <Link>Решения</Link>
                    </div>
                    <div className="main__media">
                        <Link><img src={mdi_github} alt="" /></Link>
                        <Link><img src={mdi_discord} alt="" /></Link>
                        <Link><img src={mdi_reddit} alt="" /></Link>
                        <Link><img src={mdi_twitter} alt="" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;