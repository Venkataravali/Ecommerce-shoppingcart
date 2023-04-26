const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false, //user not going to be admin
    },
    img: { type: String },
  },
  { timestamps: true }  //to get createdAt,updatedAt
);

module.exports = mongoose.model("User", UserSchema); //model name and schema name

