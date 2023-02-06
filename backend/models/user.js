const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            maxlength:32
        },
        lastName:{
            type:String,
            required:true,
            maxlength:32
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        encry_password: {
            type: String,
            required: true
        },
        role: {
            type: Number,
            default: 3
        },
        photo: {
            data: Buffer,
            contentType: String
        }
},
    {timestamps: true}
);


userSchema
  .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = uuidv4();
    this.encry_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.methods = {
  autheticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function(plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHash("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};


const user = mongoose.model("User", userSchema);

module.exports = user;