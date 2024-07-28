import { Scheme } from "../models/scheme.models.js";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Worker } from "../models/worker.models.js";  
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import {sendWelcomeEmailEnglish,sendWelcomeEmailTamil,sendWelcomeEmailHindi} from "../../nodemailer.js";
import dotenv from 'dotenv';

dotenv.config();

// Controller function to create a new worker
export const createWorker = asyncHandler(async (req, res) => {
    try {
        const { name, username, password, email, phoneNumber, region } = req.body;
        
        // Check if all required fields are provided
        if (!name || !username || !password || !email || !phoneNumber || !region) {
            throw new ApiError(404, "All fields are required");
        }
        
        // Check if the username already exists
        const usernameExists = await Worker.findOne({ username });
        if (usernameExists) {
            throw new ApiError(404, "User already exists");
        }
        
        // Check if the email already exists
        const emailExists = await Worker.findOne({ email });
        if (emailExists) {
            throw new ApiError(404, "User already exists");
        }
        console.log("fjfj")
        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new worker instance
        const newWorker = new Worker({
            name,
            username,
            password: hashedPassword,
            email,
            phoneNumber,
            region,
        });
        
        // Save the worker to the database
        
        
        // Send the welcome email
        try {
            
            await sendWelcomeEmailEnglish(name, email);
            await sendWelcomeEmailHindi(name,email);
            await sendWelcomeEmailTamil(name,email);
            console.log("Welcome email sent successfully");
        } catch (emailError) {
            console.error("Failed to send welcome email:", emailError.message);
            // Optionally, you could handle this error in a way that doesn't affect user creation
        }
        const savedWorker = await newWorker.save();
        // Send a success response
        return res.status(201).json(new ApiResponse(200, savedWorker, "Worker created"));
    } catch (error) {
        // Handle any errors that occur
        throw new ApiError(404, "Failed to register worker", error.message);
    }
});

// Controller function to log in a worker
export const loginWorker = asyncHandler(async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if all required fields are provided
        if (!username || !password) {
            throw new ApiError(404, "All fields are required");
        }

        // Check if the username exists
        const worker = await Worker.findOne({ username });
        if (!worker) {
            throw new ApiError(404, "User does not exist");
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, worker.password);
        if (!isPasswordCorrect) {
            throw new ApiError(404, "Incorrect password");
        }

        // Generate and send the JWT token
        const token = jwt.sign({ id: worker._id, username: worker.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });

        const options = {
            httpOnly: true,
            secure: true
        };

        return res
            .status(200)
            .cookie("accesstoken", token, options)
            .json(new ApiResponse(200, { token, worker }, "User logged in successfully"));
    } catch (error) {
        throw new ApiError(404, "Worker login failed", error.message);
    }
});

// Controller function to log out a worker
export const logoutWorker = asyncHandler(async (req, res) => {
    try {
        const options = {
            httpOnly: true,
            secure: true
        };
        return res
            .status(200)
            .clearCookie("accesstoken", options)
            .json(new ApiResponse(200, "", "Signed out successfully"));
    } catch (error) {
        throw new ApiError(404, "Sign-out failed", error.message);
    }
});

export const availUserScheme = asyncHandler(async (req, res) => {
    try {
        const { userId, schemeId } = req.body;

        const user = await User.findById(userId);
        const scheme = await Scheme.findById(schemeId);

        if (!user) {
            throw new ApiError(404, "User doesn't exist");
        }

        user.schemesAvailing.push(scheme);

        await user.save({ validateBeforeSave: false });

        return res
            .status(200)
            .json(new ApiResponse(200, user, "Applied for scheme successfully"));
    } catch (error) {
        throw new ApiError(404, "Scheme availing failed", error.message);
    }
});

export const register = asyncHandler(async (req, res) => {
    try {
        const {
            name,
            religion,
            income,
            gender,
            caste,
            maritalStatus,
            age,
            houseOwned,
            phoneNumber
        } = req.body;

        const { id } = req.params;

        const existingUser = await User.findOne({
            name,
            religion,
            income,
            gender,
            caste,
            maritalStatus,
            age,
            houseOwned,
            phoneNumber
        });

        if (existingUser) {
            throw new ApiError(404, "User already exists");
        }

        const newUser = await User.create({
            name,
            religion,
            income,
            gender,
            caste,
            maritalStatus,
            age,
            houseOwned,
            phoneNumber
        });

        const fwl = await Worker.findById(id);
        fwl.userObjects.push(newUser);
        await fwl.save({ validateBeforeSave: false });

        return res
            .status(200)
            .json(new ApiResponse(200, fwl, "User registered successfully by FWL"));
    } catch (error) {
        throw new ApiError(404, "Registration failed", error.message);
    }
});

export const updateUser = asyncHandler(async (req, res) => {
    try {
        const { userId } = req.body;
        const {
            name,
            religion,
            income,
            gender,
            caste,
            maritalStatus,
            age,
            houseOwned,
            phoneNumber
        } = req.body;
        const existingUser = await User.findByIdAndUpdate(userId, {
            name,
            religion,
            income,
            gender,
            caste,
            maritalStatus,
            age,
            houseOwned,
            phoneNumber
        }, {
            new: true
        });

        if (!existingUser) {
            throw new ApiError(404, "User does not exist");
        }

        return res
            .status(200)
            .json(new ApiResponse(200, existingUser, "Details updated successfully"));
    } catch (error) {
        throw new ApiError(404, "User details not updated", error.message);
    }
});