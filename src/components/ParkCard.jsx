
const ParkCard = (prop) => {
    return (
        <div className="Park-Card">
            <img src={prop.img} alt="" id="Card-IMG"/>
            <h1>{prop.name}</h1>
            <h2>{prop.location}</h2>
            <a href={prop.link} target="_blank" id="link-section">Click here for more information</a>
            
        </div>
    )
}

export default ParkCard;