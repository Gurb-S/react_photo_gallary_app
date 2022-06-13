import { NavLink, useNavigate } from "react-router-dom"

export function Nav(props) {

    /**
     * when called it passes in the text content of the target to the whenClicked prop 
     */
    const handleClick = (e) =>{
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