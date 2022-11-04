import magnify from "../imgs/magnify.png"

const Searchbar = () => {
    return (
        <div className="search-form">
            <select name="category" id="div-category">
                <option value="All">All</option>
                <option value="Bishoujo Figure">Bishoujo Figure</option>
            </select>
            <input type="search" name="search_keyword" id="form-search" placeholder="Search..." className="search-input" />
            {/* multiple search buttons will look exactly like this */}
            <button class="search-button"><img src={magnify} alt="search" className="search-icon" /></button>
        </div>
    );
}
 
export default Searchbar;