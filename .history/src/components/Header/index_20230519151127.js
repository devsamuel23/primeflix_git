import { Link } from "react-router-dom";
import "./header.css"
function Header(){
    return(
        <header>
            <Link to="/">Prime Flix</Link>
        </header>
    )
}

export default Header;