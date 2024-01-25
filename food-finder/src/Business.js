import { render } from "@testing-library/react";
import React from "react";
import { hyphenise } from "./utils";

function Business(props) {
	const { business } = props;
	const renderBusiness = (business) => {
		return (
			<div className={`business-container ${hyphenise(business.name)}`}>
				<img
					className="business-img"
					src={business.image}
					alt={`image of ${business.name}`}
				/>
				<h2 className="business-name">{business.name}</h2>
				<div className="business-info">
					<div className={"business-address"}>
						<p>{business.address}</p>
						<p>{business.city}</p>
						<p>
							{business.state} {business.zipcode}
						</p>
					</div>
					<div className={"business-reviews"}>
						<p>{business.category}</p>
						<p>{business.rating + " stars"}</p>
						<p>{business.review_count + " reviews"}</p>
					</div>
				</div>
			</div>
		);
	};

	return renderBusiness(business);
}

export default Business;
