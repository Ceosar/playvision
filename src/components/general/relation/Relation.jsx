import Extension from "../extension/Extension";
import './Relation.css'
import football from './../../../images/football_match.png'
import { Link } from "react-router-dom";

const Relation = () => {
    return (
        <>
            <div className="relation__container">
                <div className="relation__title">
                    <span>Главная</span>
                    <div className="extension">
                        <Extension/>
                    </div>
                </div>
                <div className="relation__content">
                    <div className="relation__video">
                        <img src={football} alt="" />
                    </div>
                    <div className="relation__text">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae reiciendis molestiae nisi velit. Nemo molestias commodi quae magnam. Mollitia sit numquam sed maxime itaque architecto libero deleniti obcaecati non.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae reiciendis molestiae nisi velit. Nemo molestias commodi quae magnam. Mollitia sit numquam sed maxime itaque architecto libero deleniti obcaecati non.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae reiciendis molestiae nisi velit. Nemo molestias commodi quae magnam. Mollitia sit numquam sed maxime itaque architecto libero deleniti obcaecati non.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae reiciendis molestiae nisi velit. Nemo molestias commodi quae magnam. Mollitia sit numquam sed maxime itaque architecto libero deleniti obcaecati non.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae reiciendis molestiae nisi velit. Nemo molestias commodi quae magnam. Mollitia sit numquam sed maxime itaque architecto libero deleniti obcaecati non.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae reiciendis molestiae nisi velit. Nemo molestias commodi quae magnam. Mollitia sit numquam sed maxime itaque architecto libero deleniti obcaecati non.
                        </span>
                    </div>
                    <div className="relation__inputs">
                        <input className="relation__input" placeholder="Введите запрос"/>
                        <button id="input-btn">Отправить</button>
                    </div>
                </div>
                <div className="relation__license">
                    <div className="license-name">© 2023 Play Vision AI.</div>
                    <div className="licenser-refs">
                        <Link className="licenser-ref">Лицензия</Link>
                        <Link className="licenser-ref">Условия использования</Link>
                        <Link className="licenser-ref">Политика конфиденциальности</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Relation;