import './Extension.css'
import search_icon from './../../../images/search_icon.png'
import notification_icon from './../../../images/notification.png'
import info_icon from './../../../images/info_outline.png'
import moon_icon from './../../../images/moon-solid.png'
import user_logo from './../../../images/user_logo.png'


const Extension = () => {
    return (
        <>
            <div className="extension__container">
                <div className="extension__input">
                    <img src={search_icon} alt="" />
                    <input type="text" placeholder='Поиск' />
                </div>
                <img src={notification_icon} alt="" />
                <img src={moon_icon} alt="" />
                <img src={info_icon} alt="" />
                <img id='user_logo' src={user_logo} alt="" />
            </div>
        </>
    );
}

export default Extension;