import React from "react";
import Business from "./Business";

function BusinessList(props) {
	const { businessList } = props;

	if (!businessList) return;
	console.log(businessList);

	return (
		<div className="businessList-container">
			{businessList.map((business) => (
				<Business business={business} key={business.id} />
			))}
		</div>
	);
}

export default BusinessList;
