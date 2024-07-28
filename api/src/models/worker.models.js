import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    userObjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    ],
    queriesSolved: {
        type: Number,
        default: 0
    },
    isAdminApproved : {
        type : Boolean,
        default : false
    }
});

export const Worker = mongoose.model("Worker", workerSchema);

