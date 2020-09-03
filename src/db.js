const mongoose = require('mongoose');

//create mongodb instance for application
mongoose.connect('mongodb://localhost:27017/BuildForSdg', (err) =>{
    if (!err)
       console.log('mongodb connected successfully');
    else
    console.log('Error in DB connection:' + JSON.stringify(err, undefined, 2));
});
//export mongoose
module.exports = mongoose;