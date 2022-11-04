import Searchbar from "./Searchbar";
import Headermenu from "./Headermenu";
import "./Header.css";
import site_logo from "../imgs/site_logo.png"

const Header = () => {
    return (
        <header>
            <div className="upper">
                <img src={site_logo} alt="amiami logo" className="logo" />
                <Searchbar />
                <Headermenu />
            </div>
        </header>
    );
}
 
export default Header;