import Nav from "./Nav";
import Searchbar from "./Searchbar";
import Headermenu from "./Headermenu";
import site_logo from "../imgs/site_logo.png"

const Header = () => {
    return (
        <header>
            <img src={site_logo} alt="amiami logo" />
            <Nav />
            <Searchbar />
            <Headermenu />
        </header>
    );
}
 
export default Header;