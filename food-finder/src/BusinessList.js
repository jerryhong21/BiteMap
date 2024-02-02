import { buildQueries } from "@testing-library/react";
import React from "react";
import Business from "./Business";
import { hyphenise } from "./utils/utils";

function BusinessList(props) {
	const { businessList } = props;
    console.log(businessList);
	return (
		<div className="businessList-container">
			{businessList.map((business) => (
				<Business business={business} key={hyphenise(business.name)} />
			))}
		</div>
	);
}

export default BusinessList;
