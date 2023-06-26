const Item = require("../models/Item");

// Route to create a new item

const createItem = async (req, res) => {
  try {
    const test = await Item.create(req.body);
    if (Object.keys(req.body).length == 0) {
      return res.status(400).send("Empty object!");
    }
    console.log(test);
    res.send("Item created!");
  } catch (error) {
    console.log("Error creating the item", error);
    res.status(400).send(error);
  }
};

// Route to get all items

const getItem = async (req, res) => {
  let foundItem = await Item.find();
  res.json(foundItem);
};

module.exports = {
  createItem,
  getItem,
};
