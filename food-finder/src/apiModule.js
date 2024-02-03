import { tokeniseString } from "./utils/utils";
import apiKey from "./utils/yelpApi";

async function getApiData(searchTerms, location, sortByOption) {
	console.log(searchTerms);
	console.log(location);
	console.log(sortByOption);
	// console.log(apiKey);
	const apiOptions = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
	};
	const searchTermsString = searchTerms.join("%20");
	const returnLimit = 20;
	const bypassCORS = "https://cors-anywhere.herokuapp.com/";
	const endpoint = `${bypassCORS}https://api.yelp.com/v3/businesses/search?location=${tokeniseString(
		location
	)}&term=food&categories=${searchTermsString}&sort_by=${sortByOption}&limit=${returnLimit}`;
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

export default async function retrieveBusinessList(
	searchTerms,
	location,
	sortByOption
) {
    try {
        const response = await getApiData(
            searchTerms,
            location,
            sortByOption
        );
        const businessList = [];
        const apiBusinessList = response.businesses;
        console.log(apiBusinessList);
        if (apiBusinessList.length === 0) {
            alert(`No business with Category ${searchTerms[0]} was found in ${location}`);
            return;
        }
        for (const business of apiBusinessList) {
            const concatCategories = business.categories
                .map((category) => category.title)
                .join(" ");

            const newBusiness = {
                id: business.id,
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

    } catch(error) {
        console.error(`Error: ${error.message}`);
        throw new Error("Error occured");
    }
}
