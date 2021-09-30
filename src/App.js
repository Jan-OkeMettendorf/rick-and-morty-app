import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CharacterGallery from "./components/CharacterGallery";

import RickAndMorty from './components/characters.json';

function App() {

    const characters = RickAndMorty.results

    return (
        <>
            <div>
                <Header title="my fancy otter gallery"/>
                <Navigation/>
                <CharacterGallery characters={characters}/>
            </div>
        </>
    );
}

export default App;
