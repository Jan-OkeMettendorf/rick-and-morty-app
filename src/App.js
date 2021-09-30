import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CharacterGallery from "./components/CharacterGallery";
import RickAndMorty from './components/characters.json';
import {useState} from "react";

function App() {

    const [characters, setCharacters] = useState([]);

    const showCards = (() => {
        setCharacters (RickAndMorty.results);
    })

    const clearCards = (() => {
        setCharacters ([]);
    })

    const searchName = ((event) => {
        const searchParam = event.target.value
        setCharacters (RickAndMorty.results.filter(
            (character) => character.name.toLowerCase().includes(searchParam.toLowerCase())
        ))
    })

    return (
        <>
            <div>
                <Header title="my fancy otter gallery"/>
                <Navigation/>
                <div className="buttonInput">
                    <button className="buttonSet btn btn-secondary" onClick={showCards} >Show cards</button>
                    <input className="searchCharacterName" onChange={searchName} />
                    <button className="buttonClear btn btn-secondary" onClick={clearCards} >Clear!</button>
                </div>
                <CharacterGallery characters={characters}/>
            </div>
        </>
    );
}

export default App;
