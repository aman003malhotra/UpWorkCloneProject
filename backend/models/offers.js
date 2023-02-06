const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const offerSchema = new mongoose.Schema({    
    profile:{
        type:ObjectId,
        ref:"Profile"
    },
    offerUserId:{
        type:ObjectId,
        ref:"User"
    },
    offerUserEmail:{
        type:"String"
    }
});

const offers = mongoose.model("offers", offerSchema);

module.exports = offers;