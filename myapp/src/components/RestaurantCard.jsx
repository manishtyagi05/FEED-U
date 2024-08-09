
import { CDN_URL } from "../utils/constant";
   
     const RestaurantCard =  ( props )=> {
        const {resData} = props;

        const{
          id,
          name,
          cuisine,
          rating,
          min_time,
          price_for_two,
          locality,
        } = resData
        
    return(
      <div className='res-cards'>
      <img  className="card-image" alt ="food image" src= {CDN_URL}/>
      
      <h3>{name}</h3>
      <h4> {cuisine.join(",")} </h4>
      <h4> {rating} stars </h4>
       <h4>{min_time} </h4>
      <h4> {price_for_two}</h4>
      <h4> {locality} </h4>
      </div>
  
    );
   }

   export default RestaurantCard;