// import your sequelize instance via a directory path
const sequelize = require('../config/index');

// import the functions from each seed file via a directory path
const seedMagicItems = require('./magic-item-seeds.js');

// function to seed data
const seedAll = async () => {
    // start the mySQL server and empties existing model values
    console.log('===== SYNCING DATABASE... =====')
    await sequelize.sync({ force: true }); 
    console.log('===== DATABASE SYNCED =====');

    // seed our MagicItem models
    console.log('===== SEEDING MAGIC ITEMS... =====')
    await seedMagicItems();
    console.log('===== MAGIC ITEMS SEEDED =====');

    // close server
    process.exit(0);
}

// run the above function
seedAll();