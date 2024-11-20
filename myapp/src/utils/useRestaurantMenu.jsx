
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null); // Changed variable name to camelCase for consistency

    useEffect(() => {
        fetchMenu();
    }, [resId]); // Dependency on resId so the effect runs whenever resId changes

    const fetchMenu = async () => {
        try {
            const data = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
            );

            // Check if the response is OK (status 200)
            if (!data.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await data.json();
            console.log(json);
            setResInfo(json.data); // Ensure json.data is what you expect
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    return resInfo; // Return the restaurant info
}

export default useRestaurantMenu;
