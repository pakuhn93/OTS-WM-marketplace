// import the json file to be used for bulk creating models
const magicItemsData = require('./magic-items.json');

// import the model that is getting seeded
const MagicItem = require('../models');

// prep the values in an array of model objects

// create a function to execute the creation of these models
const seedMagicItems = () => MagicItem.bulkCreate(magicItemsData);

// export the function
module.exports = seedMagicItems;