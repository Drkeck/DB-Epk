import { spotifyLogo } from "../../assets"
import "./index.css"

function Header() {

    return(
        <div className="navCon">
            <h1 className="logo">DeceptiveBrownie</h1>
            <nav>
                <ul className="list">
                    <li>
                        <a href="https://open.spotify.com/user/1dax6i1lnuzqyw46zlab6gdhr" target="_blank" rel="noreferrer"><img className="spotify" src={spotifyLogo} alt=''/></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header