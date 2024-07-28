import mongoose from "mongoose";

const schemeSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      region: { type: String, required: true },
      income: { type: String },
      ageGroup: { type: Number },
      casteApplicable: { type: String },
      religionApplicable: { type: String },
      description: { type: String },
      maritalStatus : {type : Boolean}
    },
    { timestamps: true }
  );

export const Scheme = mongoose.model("Scheme",schemeSchema)