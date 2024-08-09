const resList=  
  [
    {
        "id": 1,
        "name": "Tandoori Treats",
        "cuisine": ["North Indian", "Mughlai"],
        "rating": 4.6,
        "locality": "Connaught Place, New Delhi",
        "min_time": "35 mins",
        "cost_for_two": "₹800",
        "contact": "+911234567890"
    },
    {
        "id": 2,
        "name": "Spice Route",
        "cuisine": ["South Indian", "Chettinad"],
        "rating": 4.4,
        "locality": "Koramangala, Bangalore",
        "min_time": "30 mins",
        "cost_for_two": "₹600",
        "contact": "+918765432101"
    },
    {
        "id": 3,
        "name": "Chaat Bazaar",
        "cuisine": ["Street Food", "Chaat"],
        "rating": 4.2,
        "locality": "Charminar, Hyderabad",
        "min_time": "20 mins",
        "cost_for_two": "₹300",
        "contact": "+919876543210"
    },
    {
        "id": 4,
        "name": "Royal Biryani House",
        "cuisine": ["Biryani", "Hyderabadi"],
        "rating": 4.8,
        "locality": "Banjara Hills, Hyderabad",
        "min_time": "45 mins",
        "cost_for_two": "₹900",
        "contact": "+911122334455"
    },
    {
        "id": 5,
        "name": "The Curry Leaf",
        "cuisine": ["Kerala", "Seafood"],
        "rating": 4.5,
        "locality": "Fort Kochi, Kochi",
        "min_time": "40 mins",
        "cost_for_two": "₹700",
        "contact": "+914423344556"
    },
    {
        "id": 6,
        "name": "Dosa Delight",
        "cuisine": ["South Indian", "Udupi"],
        "rating": 4.3,
        "locality": "Anna Nagar, Chennai",
        "min_time": "25 mins",
        "cost_for_two": "₹400",
        "contact": "+914456789012"
    },
    {
        "id": 7,
        "name": "Punjabi Rasoi",
        "cuisine": ["Punjabi", "North Indian"],
        "rating": 4.7,
        "locality": "Sector 17, Chandigarh",
        "min_time": "35 mins",
        "cost_for_two": "₹800",
        "contact": "+911344567890"
    },
    {
        "id": 8,
        "name": "Rajasthan Royals",
        "cuisine": ["Rajasthani", "Thali"],
        "rating": 4.6,
        "locality": "C-Scheme, Jaipur",
        "min_time": "30 mins",
        "cost_for_two": "₹700",
        "contact": "+911414567890"
    },
    {
        "id": 9,
        "name": "Bengali Bhoj",
        "cuisine": ["Bengali", "Fish"],
        "rating": 4.4,
        "locality": "Park Street, Kolkata",
        "min_time": "40 mins",
        "cost_for_two": "₹600",
        "contact": "+913344567890"
    },
    {
        "id": 10,
        "name": "Mumbai Masala",
        "cuisine": ["Maharashtrian", "Street Food"],
        "rating": 4.5,
        "locality": "Marine Drive, Mumbai",
        "min_time": "30 mins",
        "cost_for_two": "₹500",
        "contact": "+912244567890"
    },
    {
        "id": 11,
        "name": "Goa Spice Garden",
        "cuisine": ["Goan", "Seafood"],
        "rating": 4.6,
        "locality": "Calangute, Goa",
        "min_time": "35 mins",
        "cost_for_two": "₹800",
        "contact": "+918322345678"
    },
    {
        "id": 12,
        "name": "Lucknowi Kebab Corner",
        "cuisine": ["Awadhi", "Kebab"],
        "rating": 4.7,
        "locality": "Hazratganj, Lucknow",
        "min_time": "30 mins",
        "cost_for_two": "₹600",
        "contact": "+915224567890"
    },
    {
        "id": 13,
        "name": "Mysore Magic",
        "cuisine": ["South Indian", "Mysore"],
        "rating": 4.3,
        "locality": "MG Road, Mysore",
        "min_time": "25 mins",
        "cost_for_two": "₹400",
        "contact": "+918214567890"
    },
    {
        "id": 14,
        "name": "Kashmiri Wazwan",
        "cuisine": ["Kashmiri", "Mughlai"],
        "rating": 4.6,
        "locality": "Lal Chowk, Srinagar",
        "min_time": "50 mins",
        "cost_for_two": "₹1000",
        "contact": "+911944567890"
    },
    {
        "id": 15,
        "name": "Pondy Cafe",
        "cuisine": ["French", "South Indian"],
        "rating": 4.5,
        "locality": "White Town, Pondicherry",
        "min_time": "30 mins",
        "cost_for_two": "₹700",
        "contact": "+914134567890"
    },
    {
        "id": 16,
        "name": "Nagpur Orange",
        "cuisine": ["Maharashtrian", "Street Food"],
        "rating": 4.2,
        "locality": "Sitabuldi, Nagpur",
        "min_time": "25 mins",
        "cost_for_two": "₹500",
        "contact": "+917124567890"
    },
    {
        "id": 17,
        "name": "Patiala Peg",
        "cuisine": ["Punjabi", "Bar"],
        "rating": 4.6,
        "locality": "South Delhi, New Delhi",
        "min_time": "40 mins",
        "cost_for_two": "₹1200",
        "contact": "+911123456789"
    },
    {
        "id": 18,
        "name": "Gujarat Thali House",
        "cuisine": ["Gujarati", "Thali"],
        "rating": 4.4,
        "locality": "CG Road, Ahmedabad",
        "min_time": "30 mins",
        "cost_for_two": "₹600",
        "contact": "+917925678910"
    },
    {
        "id": 19,
        "name": "Coorg Coffee House",
        "cuisine": ["Coorgi", "South Indian"],
        "rating": 4.5,
        "locality": "Madikeri, Coorg",
        "min_time": "35 mins",
        "cost_for_two": "₹500",
        "contact": "+918214567891"
    },
    {
        "id": 20,
        "name": "Kolkata Biryani House",
        "cuisine": ["Biryani", "Bengali"],
        "rating": 4.8,
        "locality": "Salt Lake, Kolkata",
        "min_time": "45 mins",
        "cost_for_two": "₹800",
        "contact": "+913344567891"
    },
    {
        "id": 21,
        "name": "Delhi Darbar",
        "cuisine": ["North Indian", "Mughlai"],
        "rating": 4.7,
        "locality": "Karol Bagh, New Delhi",
        "min_time": "35 mins",
        "cost_for_two": "₹900",
        "contact": "+911122334456"
    },
    {
        "id": 22,
        "name": "Andhra Spice",
        "cuisine": ["Andhra", "South Indian"],
        "rating": 4.5,
        "locality": "Banjara Hills, Hyderabad",
        "min_time": "30 mins",
        "cost_for_two": "₹600",
        "contact": "+914023345678"
    },
    {
        "id": 23,
        "name": "Bhopali Nawabs",
        "cuisine": ["Mughlai", "Bhopali"],
        "rating": 4.4,
        "locality": "New Market, Bhopal",
        "min_time": "40 mins",
        "cost_for_two": "₹800",
        "contact": "+917552345678"
    }
]

           export default resList;