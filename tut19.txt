//inserting data in mongo DB

use prithesh_cart

db.items.insertOne({name:"Samsung Galaxy J8",price: 20000,rating: 4,qty: 233,sold: 98});

db.items.insertMany([{name:"Samsung Galaxy J8",price: 20000,rating: 4,qty: 233,sold: 98},{name:"Samsung Galaxy J4",price: 10000,rating: 4,qty: 233,sold: 98}]);

//searching for data in MongoDB

db.items.find({rating:3.5})