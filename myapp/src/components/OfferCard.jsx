import React from "react";

const OfferCard = ({ offer }) => {
    return (
        <div className="offer-card">
           <img src=	{ "	https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/"  + offer?.info?.offerLogo}alt= "offer" className="offer-image" />
            <h3>{offer?.info?.header}</h3>
            
        </div>
    );
};

export default OfferCard;