import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Scheme } from "../models/scheme.models.js";
export const matchSchemes = asyncHandler(async (req,res) => {

    try {
        const { id } = req.params
        const user = await User.findById(id)

        const {age, income, caste, religion } = user
        
        const applicableSchemes = await Scheme.find({
            $and: [
              { ageGroup: { $gte: age || 0 } }, // Filter if age is provided
              { income: { $gte: income || 0 } }, // Filter if income is provided
              { casteApplicable: caste || { $exists: true } }, // Filter if caste is provided
              { religionApplicable: religion || { $exists: true } }, // Filter if religion is provided
            ],
        });

        const schemesAvailable = []
        applicableSchemes.forEach((scheme) => {
            for(let i = 0 ; i < user.schemesAvailing.length ; i++) {
                if(scheme === user.schemesAvailing[i]) {
                    break
                } else {
                    schemesAvailable.push(scheme)
                }
            } 
        })

        return res
        .status(200)
        .json(new ApiResponse(200,schemesAvailable,"Matched Schemes"))
    } catch (error) {
        throw new ApiError(404,"Scheme Matching Failed",error.message)
    }
})
