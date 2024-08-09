
import {LOGO_URL} from "../utils/constant"

const Header = ()=> {
    return(
      <div className="Header">
  
       <div className="logo-container">
      <img className="logo" alt = "app logo image" src={LOGO_URL}/>
       </div>
         <div className='Heading'>
         <h1> Food App</h1>
  
         </div>
    <div className="Nav-items">
      <ul>
        <li> Home </li>
        <li> About us </li>
         <li> Contact us</li>
         <li> Cart</li>
         <li>Signup</li>
        
      </ul>
    </div>
    </div>
    );
   }

   export default Header;
  