import { render } from "@testing-library/react";
import React from "react";
import { hyphenise, processCategoryStrings } from "./utils/utils";

function Business(props) {
	const { business } = props;
	const renderBusiness = (business) => {
		return (
			<div className="business-container" id={business.id}>
				<img
					className="business-img"
					src={business.image}
					alt={`image of ${business.name}`}
				/>
				<h2 className="business-name">{business.name}</h2>
				<div className="business-info">
					<div className={"business-address"}>
						<p className="business-address-address">
							{business.address}
						</p>
						<p className="business-address-city">{business.city}</p>
						<p className="business-address-state">
							{business.state} {business.zipcode}
						</p>
					</div>
					<div className={"business-reviews"}>
						<p className="business-reviews-category">
							{processCategoryStrings(business.category)}
						</p>
						<p className="business-reviews-rating">
							{business.rating + " stars"}
						</p>
						<p className="business-reviews-review_count">
							{business.review_count + " reviews"}
						</p>
					</div>
				</div>
			</div>
		);
	};

	return renderBusiness(business);
}

export default Business;
