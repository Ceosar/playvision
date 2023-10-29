import React, { useState } from 'react';
import './Menu.css';
import type_of_sport from './../../../images/type_of_sport.png'
import pro from './../../../images/pro.png'
import settings from './../../../images/settings.png'
import user_logo from './../../../images/user_logo.png'
import logout from './../../../images/Logout.png'
import { Link } from 'react-router-dom';

const Menu = () => {
    const [sportMenuOpen, setSportMenuOpen] = useState(false);
    const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);

    const toggleSportMenu = () => {
        setSettingsMenuOpen(false);
        setSportMenuOpen(!sportMenuOpen);
    };

    const toggleSettingsMenu = () => {
        setSportMenuOpen(false);
        setSettingsMenuOpen(!settingsMenuOpen);
    };

    return (
        <div className="menu__container">
            <div className="menu__content">
                <div className="menu__title">
                    <Link to='/'>
                        <span>PlayVision</span> AI
                    </Link>
                </div>
                <div className='line'></div>
                <div className="menu__type">
                    <div className='menu__list'>
                        <button className='menu__btn' onClick={toggleSportMenu}>
                            <img src={type_of_sport} alt="" />
                            <span>Виды спорта</span>
                            <img src={pro} alt="" />
                        </button>
                        <div className={`dropdown ${sportMenuOpen ? 'dropdown--active' : ''}`}>
                            <div className="dropdow__list">
                                <li>Футбол</li>
                                <li>Баскетбол</li>
                                <li>Волейбол</li>
                                <li>Другое</li>
                            </div>
                        </div>
                        <button className='menu__btn' onClick={toggleSettingsMenu}>
                            <img src={settings} alt="" />
                            <span>Настройка</span>
                            <img src={pro} alt="" />
                        </button>
                        <div className={`dropdown ${settingsMenuOpen ? 'dropdown--active' : ''}`}>
                            <div className="dropdow__list">
                                <li>Настройка1</li>
                                <li>Настройка2</li>
                                <li>Настройка3</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__logout">
                <img src={user_logo} alt="" />
                <span className='menu__logout-text'>User</span>
                <img src={logout} alt="" />
            </div>
        </div>
    );
}

export default Menu;
