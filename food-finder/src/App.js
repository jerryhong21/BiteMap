import logo from "./logo.svg";
import "./App.css";
import sampleBussinessList from "./sample_businessList";
import Business from "./Business";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";
import { useState } from "react";
import retrieveBusinessList from "./apiModule";
import { getDefaultNormalizer } from "@testing-library/react";

function App() {
	const [cuisine, setCuisine] = useState("");
	const onChangeCuisine = (newCuisine) => {
		setCuisine((prev) => newCuisine);
	};

	const [location, setLocation] = useState("");
	const onChangeLocation = (newLocation) => {
		setLocation((prev) => newLocation);
	};

	const [activeFilterId, setActiveFilterId] = useState("best_match");
	const onChangeActiveFilterId = (newFilterId) => {
		setActiveFilterId((prev) => newFilterId);
		// console.log("new activeFilter is " + activeFilterId);
	};

	// let businessList = [];
  const [businessList, setBusinessList] = useState([]);

	const onSearchSubmit = () => {
		// console.log(`Searching Yelp API for ${cuisine}, ${location}`);
		const searchTermsArray = cuisine.split(" ");
		retrieveBusinessList(
			searchTermsArray,
			location,
			activeFilterId
		).then(newBusinessList => {
      setBusinessList(newBusinessList);
    })
    console.log(businessList);
	};

	return (
		<div className="App">
			<SearchBar
				onChangeCuisine={onChangeCuisine}
				onChangeLocation={onChangeLocation}
				onSearchSubmit={onSearchSubmit}
				activeFilterId={activeFilterId}
				onChangeActiveFilterId={onChangeActiveFilterId}
			/>
			<BusinessList businessList={businessList}></BusinessList>
		</div>
	);
}

export default App;
