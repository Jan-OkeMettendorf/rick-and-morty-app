import './Navigation.css'

export default function Navigation() {

    return (
        <navigation className="navigation container">
            <div className="row justify-content-md-center">
                <div className="navigation__home col-2">home</div>
                <div className="navigation__article col-2">article</div>
                <div className="navigation__random col-2">random</div>
                <div className="navigation__gallery col-2">gallery</div>
            </div>
        </navigation>
    )
}