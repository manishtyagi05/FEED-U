
import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{  color: '#FF6347', marginBottom: '20px' }}>About Us</h1>
      <p>
        Welcome to <strong>FEED U</strong>, your ultimate destination for discovering exquisite culinary experiences! 
        Our journey began with a passion for connecting food lovers with restaurants that deliver exceptional flavors, 
        warm hospitality, and memorable dining moments.
      </p>
      <h2 style={{ color: '#FF6347', marginTop: '20px' }}>Our Mission</h2>
      <p>
        At FEED U, we aim to revolutionize the way people explore and enjoy dining. Whether it's a cozy dinner 
        for two, a family outing, or a solo adventure, we are here to ensure that every bite you take is unforgettable. 
        Our mission is to empower local restaurants by providing them with a platform to showcase their offerings while 
        enabling customers to make informed choices through reviews, menus, and personalized recommendations.
      </p>
      <h2 style={{ color: '#FF6347', marginTop: '20px' }}>Why Choose Us?</h2>
      <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        <li>
          Curated Menus: Explore detailed menus from a wide range of restaurants, from fine dining to casual eateries.
        </li>
        <li>
          Exclusive Offers: Enjoy deals and discounts specially crafted for our community of food enthusiasts.
        </li>
        <li>
          Customer-Centric Approach: Browse real customer reviews and ratings to make the best dining decisions.
        </li>
      </ul>
     
    </div>
  );
};

export default AboutUs;
