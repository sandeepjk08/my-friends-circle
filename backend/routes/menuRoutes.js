const express = require('express');
const MenuItem = require('../models/MenuItem');  // Corrected path to MenuItem model
const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();  // Fetch all menu items
    res.json(menuItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Add a new menu item
router.post('/', async (req, res) => {
  const { name, description, price, category } = req.body;

  try {
    // Check if the menu item already exists
    let existingItem = await MenuItem.findOne({ name });
    if (existingItem) {
      return res.status(400).json({ msg: 'Menu item already exists' });
    }

    // Create a new menu item
    const newItem = new MenuItem({
      name,
      description,
      price,
      category,
    });

    // Save the menu item to the database
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Export the router
module.exports = router;

