import { useEffect, useState } from "react";
import Shimmer from './Shimmer.jsx';
import OfferCard from './OfferCard.jsx'; 
 import MenuItems from "./MenuItems.jsx";
 import { useParams } from "react-router-dom";
 import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";


  
const RestaurantMenu = () => {
   

    const{resId} = useParams();
    
    const ResInfo = useRestaurantMenu(resId);  // custom hooks

    const offers = ResInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
    const menuItems = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(menuItems);
   
    
    const {  
        name,
        avgRatingString,
        totalRatingsString,
        costForTwoMessage,
        cuisines,
        locality,
        slaString,
        sla,
        isOpen,
    } = ResInfo?.cards?.[2]?.card?.card?.info || {};

    return ResInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu-page">
            <h1 className="resName">{name}</h1>

            <div className="item-info">
                <h3>{avgRatingString} stars ({totalRatingsString}) - {costForTwoMessage}</h3>
                <h3 style={{color:'red'}}>{cuisines?.join(", ")}</h3>
                <h3>Outlet - {locality}</h3>
                <h3>{slaString}</h3>
                <h4>{sla?.lastMileTravelString} |   Delivery fee will apply</h4>
                <h3 style={{ color: isOpen ? 'green' : 'red' }}>
                {isOpen ? "Open" : "Closed"}
                  </h3>
               

            </div>

              <h2  style={{ fontSize: '24px', 
            textAlign: 'center', 
            margin: '20px 0',}}
            >Deals for you</h2>
            <div className="offers-container">
                {offers?.length > 0 ? (
                    offers.map((offer) => (
                        <OfferCard key={offer?.info?.offerIds[0]} offer={offer} />
                    ))
                ) : (
                    <p>No offers available</p>
                )}
            </div>  

            <div className="menu-container">
    <h1 className="menu-heading"> Menu</h1>

    <h2  style={{
            fontSize: '24px', 
            textAlign: 'center', 
            margin: '20px 0',
}}>
Recommended </h2>


    {menuItems ? (
        menuItems.length > 0 ? (
            menuItems.map((menuItem) => (
                <MenuItems key={menuItem?.card?.info?.id} menuItem={menuItem} />
            ))
        ) : (
            <p>No menu items available</p>
        )
    ) : (
        <p>Loading...</p>
    )}

</div>
        </div>
    );
};

export default RestaurantMenu;
