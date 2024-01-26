import React from "react";
import { hyphenise } from "./utils";
import searchIcon from './icons/search_icon.svg'

const searchBarOptions = ["Best Match", "Highest Rated", "Most Reviewed"];

function SearchBar() {
	const renderSearchBarOptions = () => {
		return searchBarOptions.map((option, i) => (
			<p className="searchBar-option" key={hyphenise(option)}>{option}</p>
		));
	};
	return (
        <div className="top-container">
            <div className="title-bar">
                <h1 id="title">Ravenous</h1>
            </div>
            <div className="searchBar">
                <div className="searchBar-options">{renderSearchBarOptions()}</div>
                <div className="searchBar-input">
                    <form action='tobedetermined' className="searchBar-form">
                        <div className="searchBar-form-inputs">
                            <input type="text" placeholder="Mexican" className="input-cuisine"/>
                            <input type="text" placeholder="New York" className="input-region"/>
                        </div>
                        <button type="submit" className="searchBar-input-submit">
                            <img src={searchIcon} alt="Submit" />
                            <p>Search</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
