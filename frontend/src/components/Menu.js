import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/menu');
        setMenu(res.data);
      } catch (err) {
        console.error('Error fetching the menu:', err);
      }
    };
    fetchMenu();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu.map(item => (
          <li key={item._id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

