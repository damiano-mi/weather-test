import "bootstrap/dist/css/bootstrap.css"
import SearchBar from "./SearchBar";

export default function Navbar() {

    return (
        <nav className="navbar justify-content-between">
            <a className="navbar-brand" href="/">
                <img src="https://upload.wikimedia.org/wikipedia/it/e/e2/MacOS_Ventura_logo.png"
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="temp logo"
                />
            </a>
            <SearchBar />
        </nav>

    );
}