const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const jobDescriptionSchema = new mongoose.Schema(
    {   
        user:{
            type:ObjectId,
            ref: "User"
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        typeOfPayment:{
            type:String,
            enum:["Hourly", "Fixed"],
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        experienceNeeded:{
            type:String,
            enum:["Basic", "Intermediate", "Advanced"],
            required:true
        },
        skillsNeeded:{
            type:Array,
            default:[]
        },
        proposals:{
            type:Array,
            default:[]
        }
},
    {timestamps:true}    
)

const jobDescription = mongoose.model("JobDescription", jobDescriptionSchema);

module.exports = jobDescription;