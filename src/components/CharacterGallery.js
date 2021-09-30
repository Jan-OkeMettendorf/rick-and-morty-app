import './CharacterGallery.css'
import CharacterCard from "./CharacterCard";

export default function CharacterGallery({characters}) {

    return (
        <section className="card-gallery">
            {
                characters.map(character => <CharacterCard key={character.id} character={character}/>)
            }
        </section>
    )

}