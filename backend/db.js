const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://gofood:Omkar@cluster0.fx7st.mongodb.net/gofoodmern";

const mongoDB = async()=>{
    try{
 await mongoose.connect(mongoURI);
        console.log("connected sucessfully!!");
        const fetched_data = mongoose.connection.db.collection('food_items');

        const data = await fetched_data.find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection('food_Category');
        const catData = await foodCategory.find({}).toArray();
        global.food_items = data;
        global.foodCategory = catData;
        console.log("yay")
        
    }
    catch(err){
        console.error("Error connecting to MongoDB or fecthing data", err.message);
    }
};




module.exports=mongoDB;


