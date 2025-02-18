import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the menu items from the backend API
    axios
      .get('http://localhost:5000/api/menu') // Make sure your backend is running on this URL and port
      .then((response) => {
        setMenuItems(response.data);  // Set the fetched data to the state
        setLoading(false);  // Set loading to false once data is loaded
      })
      .catch((error) => {
        console.error('There was an error fetching the menu items!', error);
        setLoading(false);  // Set loading to false in case of error
      });
  }, []);

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      {loading ? (
        <p>Loading menu...</p>  // Show loading message while fetching data
      ) : (
        <ul>
          {menuItems.length === 0 ? (
            <p>No menu items available.</p>  // In case no menu items are returned
          ) : (
            menuItems.map((item) => (
              <li key={item._id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ₹{item.price}</p>
                <p>Category: {item.category}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Menu;

