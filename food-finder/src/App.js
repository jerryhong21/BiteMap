import "./App.css";
import sampleBussinessList from "./sample_businessList";
import Business from "./components/Business";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import retrieveBusinessList from "./modules/getBusinessList";
import useUserCoordinates from "./hooks/useUserCoordinates";

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

	// onWebsite start, get user location to show closest recommended restaurants
	const { userCoordinates, userCoodinatesError } = useUserCoordinates();
	useEffect(() => {
		// if no coordinates - display nothing for now
		if (userCoodinatesError) return;
		if (userCoordinates.latitude === 0 && userCoordinates.longitude === 0) {
			console.log("not loaded");
			return;
		}

		retrieveBusinessList(null, userCoordinates, activeFilterId).then(
			(newBusinessList) => {
				console.log(newBusinessList);
				if (!newBusinessList) {
					return;
				}
				setBusinessList(newBusinessList);
			}
		);
	}, [userCoordinates]);

	const onSearchSubmit = () => {
		// console.log(`Searching Yelp API for ${cuisine}, ${location}`);
		const searchTermsArray = cuisine.split(" ");
		retrieveBusinessList(searchTermsArray, location, activeFilterId).then(
			(newBusinessList) => {
        console.log(newBusinessList);
				setBusinessList(newBusinessList);
			}
		);
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
