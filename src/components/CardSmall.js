import { useState } from "react";
import CardBig from "./CardBig";

function CardSmall(props) {

    const [click, setClick] = useState(false);

    let toggleClick = () => (setClick(!click))

    return (
        <div>
            <div onClick={toggleClick} className="starCard">
                <h3>{props.starship.name}</h3>
                <p>{props.starship.model}</p>
            </div>
            <div>
                {click && <CardBig url={props.starship.url} />}
                {click && <button onClick={toggleClick}>SALIR</button>}
            </div>
        </div>
    )
}

export default CardSmall;