const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const freelanceProfileSchema = new mongoose.Schema(
    {   user:{
            type:ObjectId,
            ref: "User"
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type: String,
            required:true
        },
        price:{
            type:Number,
        },
        typeOfPayment:{
            type:String,
            enum:["Hourly", "Fixed"],
            required:true
        },
        skills:{
            type:Array,
            default:[]
        },
        qualification:{
            type:String,
            enum:["Graduation", "Post Graduation", "High School"]
        },
        institution:{
            type:String,
            required:true
        },
        availabilty:{
            type:Number,
        },
        offers: {
            type:Array,
            default: []
        }
},
    {timestamps:true}
)

const freelanceProfile = mongoose.model("freelanceProfile", freelanceProfileSchema);

module.exports = freelanceProfile;