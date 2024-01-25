import React from 'react'
import Business from './Business';

function BusinessList(props) {
    const { businessList } = props;
    return (
        <div className='businessList-container'>
            {businessList.map((business) => <Business business={business}/>)}
        </div>    
    );

}

export default BusinessList;