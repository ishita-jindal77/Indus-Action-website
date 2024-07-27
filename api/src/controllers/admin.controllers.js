import { Scheme } from "../models/scheme.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const addNewScheme = asyncHandler(async (req,res) => {
    try {
        const newScheme = await Scheme.create({
            
        })

        return res
        .status(200)
        .json(new ApiResponse(200,newScheme,"New Scheme Added"))

    } catch (error) {
        throw new ApiError(404,"Error Occured",error.message)
    }
})

export const updateScheme = asyncHandler(async (req,res) => {

    try {
        const {schemeToUpdate} = req.body
        const updates = req.body

        const scheme = await Scheme.findOne(
            {
                schemeToUpdate
            }
        )

        // update scheme

        await scheme.save({validateBeforeSave : false})

        return res
        .status(200)
        .json(new ApiResponse(200,scheme,"Scheme Updated"))


    } catch (error) {
        throw new ApiError(404,"Error Occured",error.message)
    }
})