import React from "react";



const Search = () => {
    return (
        <div class="search-container">
            <input type="text" placeholder="Rechercher une Salle" value="Konser Jazz"></input>
            <input type="text" placeholder="Localisation" value="Indonésie" disabled></input>
            <select>
                <option value="any">Any date</option>
            </select>
        </div>
    )

}


export default Search;