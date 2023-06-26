const Item = require("../models/Item");

// Route to create a new item

const createItem = (req, res)=>{
    Item.create(req.body)
    res.send("Item created!")
}

// Route to get all items

const getItem = async (req, res) => {
    let foundItem = await Item.find()
    res.json(foundItem)
  };

  module.exports = {
    createItem,
    getItem
  }