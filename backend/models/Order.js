const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    quantity: { type: Number, required: true, default: 1 },  // Quantity of each menu item
    price: { type: Number, required: true },  // Price for each item (can be retrieved from MenuItem model)
  }],
  total: { type: Number, required: true },
  status: { type: String, default: 'pending' },  // Status of the order (pending, completed, canceled)
  createdAt: { type: Date, default: Date.now },  // When the order was placed
});

OrderSchema.pre('save', function(next) {
  // Calculate total price based on items in the order
  let totalPrice = 0;
  this.items.forEach(item => {
    totalPrice += item.price * item.quantity;
  });
  this.total = totalPrice;  // Set total price of the order
  next();
});

module.exports = mongoose.model('Order', OrderSchema);

