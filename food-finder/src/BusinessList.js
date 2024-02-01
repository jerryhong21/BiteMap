import React from "react";
import Business from "./Business";
import { hyphenise } from "./utils";

function BusinessList(props) {
	const { businessList } = props;
	return (
		<div className="businessList-container">
			{businessList.map((business) => (
				<Business business={business} key={hyphenise(business.name)} />
			))}
		</div>
	);
}

export default BusinessList;
