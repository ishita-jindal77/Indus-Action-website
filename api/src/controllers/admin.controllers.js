import { User } from "../models/user.models.js";
import { Worker } from "../models/worker.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const fetchUsers = asyncHandler(async (req,res) => {

    try {
        const users = await User.find();
        return res
        .status(200)
        .json(new ApiResponse(200,users,"Users Fetched Sucessfully"))
    } catch (error) {
        throw new ApiError(404,"Fetch-User-Failed",error.message)
    }
})

export const fwlWorkers = asyncHandler(async (req,res) => {
    try {
        const fwlWorkers = await Worker.find()

        return res
        .status(200)
        .json(new ApiResponse(200,fwlWorkers,"FWL-Workers fetched Sucessfully"))
    } catch (error) {
        throw new ApiError(404,"Fwl-Workers-Fetch-Failed")
    }
})

export const validateFWL = asyncHandler(async (req,res) => {
    try {
        const { workerId } = req.body
        const fwlWorker = await Worker.findByIdAndUpdate(workerId,
            {
                $set : {
                    isAdminApproved : true
                }
            },
            {
                new : true
            }
        )

        return res
        .status(200)
        .json(new ApiResponse(200,fwlWorker,"FWL Worker Validated"))
        
    } catch (error) {
        throw new ApiError(404,"FWL-Workers-Validation-Failed",error.message)
    }
})