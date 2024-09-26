
import { CDN_URL,CLOUDANARY_IMAGE } from "../utils/constant";
import { useState } from "react";
import renderStars from "../utils/stars";
   
     const RestaurantCard =  ( props )=> {
        const {resData} = props;

        const{
          id,
          name,
          cloudinaryImageId,
          avgRating,
          costForTwo,
          isOpen,
          cuisines,
          locality,
          areaName,
        } = resData;


        
    return(
      <div className='res-cards'>

        {cloudinaryImageId ? (
        <img
          className="card-image"
          alt="food image"
          src={`${CLOUDANARY_IMAGE}${cloudinaryImageId}`}
        />
      ) : (
        <p>Image not available</p>
      )}
      
      <h3>{name}</h3>

      <h4 className='cuisine-list'> {cuisines?.length > 0   ? cuisines.join(", ")  : "Cuisines not available"} </h4>  
      
    
      <h4>  {renderStars(avgRating)} {avgRating} stars </h4>

      <h4>{costForTwo}</h4>
      
      <h6 >{isOpen? "Opens": "Closed"}</h6>
      </div>
  
    );
   }

   export default RestaurantCard;