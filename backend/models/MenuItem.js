const mongoose = require('mongoose');

// Define the MenuItem schema
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Menu items data to be added
const menuItems = [
  {
    name: 'Hyderabadi Biryani',
    description: 'A fragrant rice dish made with basmati rice, meat (chicken, mutton), and aromatic spices.',
    price: 250,
    category: 'Main Course',
  },
  {
    name: 'Mirchi Ka Salan',
    description: 'A spicy and tangy curry made with green chilies, peanuts, and sesame seeds.',
    price: 180,
    category: 'Side Dish',
  },
  {
    name: 'Haleem',
    description: 'A rich, savory stew made with meat, wheat, lentils, and spices. Traditionally eaten during Ramadan.',
    price: 220,
    category: 'Main Course',
  },
  {
    name: 'Shami Kebab',
    description: 'Ground meat kebabs made with beef or mutton and a blend of spices, shaped into patties and shallow fried.',
    price: 150,
    category: 'Starter',
  },
  {
    name: 'Bagara Baingan',
    description: 'A traditional Hyderabadi eggplant curry made with tamarind, peanuts, and sesame seeds.',
    price: 170,
    category: 'Side Dish',
  },
  {
    name: 'Double Ka Meetha',
    description: 'A delicious dessert made with bread, milk, sugar, dry fruits, and saffron.',
    price: 120,
    category: 'Dessert',
  },
  {
    name: 'Hyderabadi Lassi',
    description: 'A refreshing yogurt-based drink flavored with rosewater and saffron.',
    price: 80,
    category: 'Drink',
  },
  {
    name: 'Khubani Ka Meetha',
    description: 'A sweet dessert made with dried apricots, almonds, and a hint of saffron.',
    price: 150,
    category: 'Dessert',
  },
  {
    name: 'Paya Soup',
    description: 'A flavorful soup made with goat trotters, cooked with aromatic spices.',
    price: 200,
    category: 'Soup',
  },
  {
    name: 'Mutton Korma',
    description: 'A rich curry made with tender mutton cooked in yogurt, nuts, and a blend of spices.',
    price: 280,
    category: 'Main Course',
  },
];

// Insert the menu items into the database
const addMenuItems = async () => {
  for (let item of menuItems) {
    const newItem = new MenuItem(item);
    try {
      await newItem.save();
      console.log(`${item.name} added to the menu.`);
    } catch (error) {
      console.error(`Error adding ${item.name}:`, error);
    }
  }
};

addMenuItems();

module.exports = MenuItem;

