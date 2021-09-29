import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CharacterCard from "./components/CharacterCard";

import RickAndMorty from './components/characters.json';

function App() {

    const characters = RickAndMorty.results

    return (
        <>
            <div>
                <Header title="my fancy otter gallery"/>
                <Navigation/>
                <CharacterCard character={characters[0]}/>
                <CharacterCard character={characters[1]}/>
                <CharacterCard character={characters[2]}/>
                <CharacterCard character={characters[3]}/>
            </div>
        </>
    );
}

export default App;
