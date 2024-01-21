import { render } from "@testing-library/react";
import React from "react";

// Sample hard-coded business list
const businessList = [
	{
		name: "Margaret",
		image: "https://www.theworlds50best.com/discovery/filestore/jpeg/Margaret_Interior.jpeg",
		address: "9 Ebsworth Rd Rose Bay",
		city: "Sydney",
		state: "NSW",
		zipcode: 2029,
		category: "Italian",
		rating: 5.0,
		review_count: 50,
	},
	{
		name: "Oborozouki",
		image: "https://www.theworlds50best.com/discovery/filestore/jpeg/Margaret_Interior.jpeg",
		address: "5 Quay Street Circular Quay",
		city: "Sydney",
		state: "NSW",
		zipcode: 2000,
		category: "Japanese",
		rating: 4.5,
		review_count: 100,
	},
];

function Business(business) {
	const renderBusiness = (business) => {
		return (
			<div className={"business-block" + business.name}>
				<img src={business.image} alt={`image of ${business.name}`} />
				<h2 className="business-name">{business.name}</h2>
				<div className={"business-address" + business.name}>
					<ul>
						<li>{business.address}</li>
						<li>{business.city}</li>
						<li>{business.city + business.zipcode}</li>
					</ul>
				</div>
				<div className={"business-info" + business.name}>
					<ul>
						<li>{business.address}</li>
						<li>{business.city}</li>
						<li>{business.city + business.zipcode}</li>
					</ul>
				</div>
			</div>
		);
	};

    return (renderBusiness(business));
}

export default Business;
