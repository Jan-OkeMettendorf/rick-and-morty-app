import './Header.css'

export default function Header(props){

    return(
        <header className="header">
            <img className="header__logo" src="https://www.craftgenesis.com/pub/media/catalog/product/cache/9c7cc15d5452b680a73ff186d25f07f7/C/G/CGC3338_1.jpg" alt="otter logo"/>
            <h1>{props.title}</h1>
        </header>
    )
}