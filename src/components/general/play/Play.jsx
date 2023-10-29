import Extension from "../extension/Extension";
import Menu from "../menu/Menu";
import Relation from "../relation/Relation";
import './Play.css'

const Play = () => {
    return (
        <>
            <div className="play__container">
                <Menu/>
                <Relation/>
            </div>
        </>
    );
}

export default Play;