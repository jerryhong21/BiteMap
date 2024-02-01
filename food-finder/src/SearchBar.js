import React, {useState} from "react";
import { hyphenise } from "./utils";
import searchIcon from "./icons/search_icon.svg";

// const searchBarOptions = ["Best Match", "Highest Rated", "Most Reviewed"];

const searchBarFilterOptions = [
	{ filterName: "Best Match", id: "best-match" },
	{ filterName: "Highest Rated", id: "highest-rated" },
	{ filterName: "Most Reviewed", id: "most-reviewed" },
];

function SearchBar(props) {
	const {
		onChangeCuisine,
		onChangeLocation,
		onSearchSubmit,
		activeFilterId,
        onChangeActiveFilterId
	} = props;

    const changeCuisineHandler = (e) => {
        onChangeCuisine(e.target.value);
    }
    const changeLocationHandler = (e) => {
        onChangeLocation(e.target.value);
    }

    const submitSearchHandler = (e) => {
        e.preventDefault(); // REMOVE LATER
        onSearchSubmit();
    }

    const changeActiveFilterIdHandler = (e) => {
        onChangeActiveFilterId(e.target.id);
    }

	const renderSearchBarOptions = () => {
		return searchBarFilterOptions.map((filterObj, i) => (
			<button
				className={`searchBar-option-button ${
					activeFilterId === filterObj.id ? "active" : ""
				}`}
				key={filterObj.id}
				id={filterObj.id}
				value={filterObj.filterName}
				onClick={changeActiveFilterIdHandler}>
				{filterObj.filterName}
			</button>
		));
	};
	return (
		<div className="top-container">
			<div className="title-bar">
				<h1 id="title">Ravenous</h1>
			</div>
			<div className="searchBar">
				<div className="searchBar-options">
					{renderSearchBarOptions()}
				</div>
				<hr className="searchBar-divider" />
				<div className="searchBar-input">
					<form action="tobedetermined" className="searchBar-form"
                    onSubmit={submitSearchHandler}>
						<div className="searchBar-form-inputs">
							<input
								type="text"
								placeholder="Mexican"
								className="input-cuisine"
								onChange={changeCuisineHandler}
							/>
							<input
								type="text"
								placeholder="New York"
								className="input-region"
								onChange={changeLocationHandler}
							/>
						</div>
						<button
							type="submit"
							className="searchBar-input-submit">
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
