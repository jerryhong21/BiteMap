import React, { useState, useEffect } from "react";

const useUserCoordinates = () => {
	const [userCoordinates, setUserCoodinates] = useState({
		longitude: 0,
		latitude: 0,
	});

	const [error, setError] = useState("");

	useEffect(() => {
        if (!'geolocation' in navigator) {
			setError("Geolocation is not supported by this browser");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Latitude: " + position.coords.latitude);
                console.log("Longitude: " + position.coords.longitude);
                setUserCoodinates({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            }, (error) => {
                setError(
                    "Error Code = " + error.code + " - " + error.message
                );
            }
        );
	}, []);

    return {userCoordinates, error};
};

export default useUserCoordinates;
