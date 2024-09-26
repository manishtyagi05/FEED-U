import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'

   
const Body = ()=>{
  // local state variabele
// state variable - super powerful variable(hook)
  

 
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);

  const[SearchText, setSearchText] = useState("");
  
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
  useEffect(()=>{
   
    fetchData();
  }, []);

  const fetchData = async ()=> {
    try{
    const data =await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

   
    if (Array.isArray(restaurants)) {
     
      const restaurantInfo = restaurants.map(restaurant => restaurant.info);


      setListOfRestaurant(restaurantInfo);
      setFilteredRestaurants(restaurantInfo);

    } else {
    
      setListOfRestaurant([]); 
    }
  }
   catch (error) {
    console.error("Error fetching data:", error);
  }
     
  }

  //Conditional rendering
  if(ListOfRestaurant.length=== 0){
    return <Shimmer/>
  }
  
    return(
     <div className='body'>
      
      <div className="filter">

      <div className="Search-box">
        <input type="text" className="search-box" value={SearchText} placeholder="Search Restaurants"
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={()=>{
            // filter out and show on UI
            const filtered =     ListOfRestaurant.filter((res)=> res.name.toLowerCase().includes(SearchText.toLowerCase()));
            setFilteredRestaurants(filtered);
        }}>Search</button>
      </div>
      <button className="filter-btn" 
       onClick={() => {

   

    const filteredList = ListOfRestaurant.filter((res) => {
    
      return ( res.avgRating >= 4.5);
    });

    setFilteredRestaurants(filteredList);

 
    if (filteredList.length === 0) {
      alert("No top-rated restaurants found!");
    }
  }}>Top rated restaurant</button>

</div>
     <div className='res-container'>
    
     {filteredRestaurants.length === 0 ? (
          <p>No results found</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link  key={restaurant.id} to={"/restaurants/"+restaurant.id}><RestaurantCard  resData={restaurant} /></Link>
          ))
        )}

     </div>
     </div>
    );
   }

   export default Body;
  