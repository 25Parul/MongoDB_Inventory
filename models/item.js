const mongoose = require("mongoose");

// Define the schema for the item
const itemSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    inventory: Number,
    nextDelivery: Date,
    deliveryAmt: Number,
    name: String,
  },
  { timestamps: true }
);

// Create the Item model using the schema
const Item = mongoose.model("Item", itemSchema);

// Export the Item model
module.exports = Item;
