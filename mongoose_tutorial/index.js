var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/prithesh_cart',{newUrlParser:true,useUnifiedTopology:true});

var db=mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){

    console.log("We are connected");
});