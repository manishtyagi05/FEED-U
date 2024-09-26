import React from "react";
import "./MenuItems.css";

const MenuItems = ({menuItem})=>{
    const offerTags = menuItem?.card?.info?.offerTags;
   const rating = menuItem?.card?.info?.ratings?.aggregatedRating.rating;
   console.log( menuItem?.card?.info?.price);
   
    return (
        
        <div className="menuItem-container">

            <div className="menuItem-details">
                <h3>{menuItem?.card?.info?.name}</h3>

                <h5>   {menuItem?.card?.info?.defaultPrice 
    ? `${menuItem.card.info.defaultPrice / 100} Rs.` 
    : menuItem?.card?.info?.price 
    ? `${menuItem.card.info.price / 100} Rs.` 
    : "Price not available"}</h5>


                {offerTags && offerTags.length > 0 ? (
                    <h5>{offerTags[0]?.title} - {offerTags[0]?.subTitle}</h5>
                ) : (
                    <h5>No offers available</h5>
                )}
               
                 <h3 style={{color:'green'}}>{menuItem?.card?.info?.ratings?.aggregatedRating.rating} ★</h3>
                <h4>{menuItem?.card?.info?.description}</h4>
            </div>
            <img 
                className="menuItem-image" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + menuItem?.card?.info?.imageId} 
                alt={menuItem?.card?.info?.name} 
            />
        </div>
    );

};

export default MenuItems;