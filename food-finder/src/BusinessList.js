import { buildQueries } from "@testing-library/react";
import React from "react";
import Business from "./Business";
import { hyphenise } from "./utils/utils";

function BusinessList(props) {
	const { businessList } = props;

    // const handleDuplicateBusiness = () => {
    //     if (businessList.length === 0 || businessList.length === 1) return;
    //     const businessNameList = businessList.map(business => business.name);
    //     const duplicateBusinessNameList = businessNameList.filter((business, index) => businessNameList.indexOf(business) !== index);

    //     for (const business of businessList) {
    //         if (duplicateBusinessNameList.includes(business.name)) {
                
    //         }
    //     }
        
        
    // }

 
	return (
		<div className="businessList-container">
			{businessList.map((business) => (
				<Business business={business} key={business.id} />
			))}
		</div>
	);
}

export default BusinessList;
