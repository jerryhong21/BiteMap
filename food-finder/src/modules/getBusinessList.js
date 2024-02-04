import { tokeniseString } from "../utils/utils";
import apiKey from "../utils/yelpApi";

/**
 *
 * @param {string[]} searchTerms
 * @param {string} location
 * @param {string} sortByOption
 * @returns
 */
async function getSearchbarApiData(searchTerms, location, sortByOption) {
	console.log(searchTerms);
	console.log(location);
	console.log(sortByOption);
	// Variables to form api queryString
	const apiOptions = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
	};

	// base URLs that prepends api endpoint
	const bypassCORS = "https://cors-anywhere.herokuapp.com/";
	const baseApiUrl = "https://api.yelp.com/v3/businesses/search";

	// amount of restaurants api returns
	const restaurantAmountLimit = 20;

	if (typeof location === "string" && location.trim().length === 0) {
		location = getUserCoordinates();
		if (!location) return null;
	}

	let endpoint;
	// Default behaviour on page load (closest restaurants to user location)
	console.log(`type of location is ${typeof location}`);
	if (
		typeof location === "object" &&
		"longitude" in location &&
		"latitude" in location
	) {
		const defaultFilter = "distance";
		endpoint = `${bypassCORS}${baseApiUrl}?longitude=${location.longitude}&latitude=${location.latitude}&term=food&sort_by=${defaultFilter}&limit=${restaurantAmountLimit}`;

		// Api call based on searchbar inputs
	} else if (typeof location === "string") {
		const searchTermsString = searchTerms.join("%20");

		endpoint = `${bypassCORS}${baseApiUrl}?location=${tokeniseString(
			location
		)}&term=food&categories=${searchTermsString}&sort_by=${sortByOption}&limit=${restaurantAmountLimit}`;
	}

	// const endpoint = `${bypassCORS}https://api.yelp.com/v3/businesses/search?location=${tokeniseString(
	// 	location
	// )}&term=food&categories=${searchTermsString}&sort_by=${sortByOption}&limit=${returnLimit}`;
	console.log(endpoint);

	try {
		const response = await fetch(endpoint, apiOptions);
		if (!response.ok) {
			console.log(response);
			throw new Error(
				`API call failed with status: ${response.status} and message ${response.message}`
			);
		}
		return await response.json();
	} catch (error) {
		console.error(`Error occured${error.message}`);
	}
}

/**
 *
 * @param {string[]} searchTerms
 * @param {string} location
 * @param {string} sortByOption
 * @returns
 */
export default async function retrieveBusinessList(
	searchTerms,
	location,
	sortByOption
) {
	try {
		const response = await getSearchbarApiData(
			searchTerms,
			location,
			sortByOption
		);
		if (!response) return null;
		const businessList = [];
		const apiBusinessList = response.businesses;
		console.log(apiBusinessList);
		// if (apiBusinessList.length === 0) {
		// 	alert(
		// 		`No business with Category ${searchTerms[0]} was found in ${location}`
		// 	);
		// 	return;
		// }
		for (const business of apiBusinessList) {
			const concatCategories = business.categories
				.map((category) => category.title)
				.join(" ");

			const newBusiness = {
				id: business.alias,
				name: business.name,
				image: business.image_url,
				address: business.location.address1,
				city: business.location.city,
				state: business.location.state,
				zipcode: business.location.zip_code,
				category: concatCategories,
				rating: business.rating,
				review_count: business.review_count,
			};
			businessList.push(newBusiness);
		}
		return businessList;
	} catch (error) {
		console.error(`Error: ${error.message}`);
		throw new Error(`Error: ${error.message}`);
	}
}

const getUserCoordinates = () => {
	if (!"geolocation" in navigator) {
		return null;
	}
	let location = null;
	navigator.geolocation.getCurrentPosition(
		(position) => {
			console.log("Latitude: " + position.coords.latitude);
			console.log("Longitude: " + position.coords.longitude);
			location = {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			};
		},
		(error) => {
			console.error("Error Code = " + error.code + " - " + error.message);
			return null;
		}
	);
	return location;
};
