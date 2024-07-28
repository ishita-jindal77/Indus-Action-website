import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  income: { type: String, required: true },
  religion: { type: String, required: true },
  caste: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  houseOwned: { type: Boolean, required: true },
  maritalStatus: { type: Boolean },
  gender : {type : String},
  schemesAvailing: [{ type: mongoose.Schema.Types.ObjectId, ref: "Scheme" }],
  aadharNumber : {
    type : String,
    required : true,
    unique : true
  },
  region : {
    type : String,
    required : true
  },
  education : {
    type : String,
  }
});

export const User = mongoose.model("User", userSchema);