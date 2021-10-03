import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import {fetchRickAndMortyApi} from "./service/rick-and-morty-api";

function App() {

    const [characters, setCharacters] = useState([]);
    const [url, setUrl] = useState("https://rickandmortyapi.com/api/character")
    const [pageInfo, setPageInfo] = useState({})

    useEffect(() => {
            console.log("fetch");
            fetchRickAndMortyApi(url)
                .then(response => {
                    setCharacters(response.results)
                    setPageInfo(response.info)
                })
                .catch((error) => console.log(error))
        }
        , [url]
    )

    console.log(characters)

    const nextPage = (() => {
        if (pageInfo.next != null) {
            setUrl(pageInfo.next)
        }
    })

    const prevPage = (() => {
        if (pageInfo.prev != null) {
            setUrl(pageInfo.prev)
        }
    })

    // const showCards = (() => {
    //     setCharacters (RickAndMorty.results);
    // })
    //
    // const clearCards = (() => {
    //     setCharacters ([]);
    // })

    const searchName = ((event) => {
        const searchParam = event.target.value
        setCharacters(characters.filter(
            (character) => character.name.toLowerCase().includes(searchParam.toLowerCase())
        ))
    })

    return (
        <>
            <div>
                <Header title="my fancy otter gallery"/>
                <Navigation/>
                {characters.length < 1  ? <p className="conditionalText">No characters found!</p> :
                    <div className="buttonInput">
                        {/*<button className="buttonSet btn btn-secondary" onClick={showCards} >Show cards</button>*/}
                        <button className="buttonPrev btn btn-secondary" onClick={prevPage}
                                disabled={pageInfo.prev === null}>prev Page
                        </button>
                        <input className="searchCharacterName" onChange={searchName} placeholder="search character"/>
                        {/*<button className="buttonClear btn btn-secondary" onClick={clearCards} >Clear!</button>*/}
                        <button className="buttonNext btn btn-secondary" onClick={nextPage}
                                disabled={pageInfo.next === null}>next Page
                        </button>
                    </div>
                }
                <CharacterGallery characters={characters}/>
            </div>
        </>
    );
}

export default App;
