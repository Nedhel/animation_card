import '../styles/styleCard.css'
export function Card({backgroundImg, frontImg}){
    return(
        <div className="cardContainer">
            <img src={backgroundImg} alt="background" />
            <img src={frontImg} alt="background" />
        </div>
    )
}