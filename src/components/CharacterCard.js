import './CharacterCard.css'

export default function CharacterCard({character}){

    return(
        <>
            <div className="card">
                <div className="card__name">{character.name}</div>
                {/*<div className="card__species">{character.species}</div>*/}
                <div className="card__originName">{character.origin.name}</div>
                <div><img src={character.image} alt="logo character" className="card__logo"/></div>
            </div>
        </>
    )

}