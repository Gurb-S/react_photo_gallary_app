import { NavLink } from "react-router-dom"

export function Nav(props) {

    const handleClick = (e) =>{
        console.log(e.target.textContent)
        props.whenClicked(e.target.textContent)
    }

    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/cats" onClick={handleClick}>Cats</NavLink></li>
                <li><NavLink to="/dogs" onClick={handleClick}>Dogs</NavLink></li>
                <li><NavLink to="/computers" onClick={handleClick}>Computers</NavLink></li>
            </ul>
        </nav> 
    )
} 