const Searchbar = () => {
    return (
        <form action="">
            <select name="category" id="form-category">
                <option value="All">All</option>
            </select>
            <input type="search" name="search_keyword" id="form-search" placeholder="Search..." />
            {/* multiple search buttons will look exactly like this */}
            <input type="submit" value="Search" class="search-button" />
        </form>
    );
}
 
export default Searchbar;