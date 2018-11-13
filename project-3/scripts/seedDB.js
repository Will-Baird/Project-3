const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/inventorymanager"
);

const inventorySeed = [
  {
    product: "Camera",
    quantity: "12",
    date: new Date(Date.now())
  },
  {
    product: "Tripod",
    quantity: "15",
    date: new Date(Date.now())
  },
  {
    product: "Camera Track for rolling tripod",
    quantity: "2",
    date: new Date(Date.now())
  },
  {
    product: "Small LED lights",
    quantity: "6",
    date: new Date(Date.now())
  },
  {
    product: "Large LED lights",
    quantity: "2",
    date: new Date(Date.now())
  },
  {
    product: "Box Lights",
    quantity: "4",
    date: new Date(Date.now())
  },
  {
    product: "Shotgun Mic Set",
    quantity: "2",
    date: new Date(Date.now())
  }
];

db.Inventory
  .remove({})
  .then(() => db.Inventory.collection.insertMany(inventorySeed))
  .then(data => {
    console.log(data.result.n + " inventory inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
