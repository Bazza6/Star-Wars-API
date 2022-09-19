function CardBig(props) {

    //let starshipID = props.url.replace("https://swapi.dev/api/starships/", "");
    let starshipID = props.url.slice(32);
    starshipID = starshipID.slice(0, -1);


    return (
        <div>
            <h1 className="cardBig">ID={starshipID}</h1>
        </div>
    )
}

export default CardBig;