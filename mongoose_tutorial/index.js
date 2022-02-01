// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/prithesh_cart');
}


var db=mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){

    console.log("We are connected");
});


const kittySchema = new mongoose.Schema({
    name: String
  });
//console.log(kittySchema.name);

const Kitten = mongoose.model('Kitten', kittySchema);

var obj1=new Kitten({name:'object'});
console.log(obj1.name);

kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  
  //const Kitten = mongoose.model('Kitten', kittySchema);

