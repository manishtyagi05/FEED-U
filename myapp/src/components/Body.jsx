import RestaurantCard from "./RestaurantCard";

import { useState } from "react";
import resList from "../utils/mockdata";

   
const Body = ()=>{
  // local state variabele
// state variable - super powerful variable(hook)

  const [ListOfRestaurant, setListOfRestaurant] = useState(resList);
  // can also be written as 
  // const arr = useState(resList);
//   const [ListOfRestaurant, setListOfRestaurant] = arr;  // array destructuring

    return(
     <div className='body'>
      
      <div className="filter">
      <button className="filter-btn" 
      onClick={()=>{
        //filter logic
        const filteredList = ListOfRestaurant.filter( 
          (res)=> res.rating > 4

        );
        setListOfRestaurant(filteredList)

      }}
      >Top rated restaurant</button>

</div>
     <div className='res-container'>
    
     { ListOfRestaurant.map( (restaurant) => 
      <RestaurantCard  
      key = {restaurant.id} 
       resData ={restaurant}/>
       )}

     </div>
     </div>
    );
   }

   export default Body;
  