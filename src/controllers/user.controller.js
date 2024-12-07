import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";

import {User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
const registerUser = asyncHandler(async (req,res)=>
{

//get user detaills form the FE
//CHECK IF THE USER ALREADY ESXIXTS
//IF DONT EXSIST ADD THE USER AND RENDER IT TO LOGIN ROUTE 
//CHECK FOR IMAGES ,UPLOAD ON CLOUDINARY 
//CREATE USER OBJ - CREATE ENTRY IN DB
//REMOVE PASS AND REFRESH TOKEN FIELD FROM RESPONSE 
//CHECK RESPONSE FOR USER CREATION AND RETURN RESPONSE
const {fullname,username,email,password}=req.body;

//validation
if([fullname,email,username,password].some((field)=>{field?.trim()===""}))
{
    throw new ApiError(400,"all fields ae required")
}

//check if user already exists
const existingUser = await User.findOne({
    $or:[{username},{email}]
});

if(existingUser)
{
    throw new ApiError(409,"username or email already exists")
}




const avatarfilelocalpath = req.files?.avatar[0]?.path;
const coverImagelocalpath = req.files?.coverImage[0]?.path;
if(!avatarfilelocalpath)
{
    throw new ApiError(400,"AVATAR IS REQUIRED");
}

//upload on cloudinary
const avatar = await uploadOnCloudinary(avatarfilelocalpath);
const coverImage = await uploadOnCloudinary(coverImagelocalpath);
if(!avatar)
{
    throw new ApiError(400,"AVATAR IS REQUIRED");
}

const user = await User.create
({

    fullname,
    avatar:avatar.url,
    coverImage:coverImage?.url ||"",
    email,
    password,
    username:username.toLowerCase()
})

const createdUser = await User.findById(user._id).select(
"-password -refreshToken"
)


 if(!createdUser)
{
    throw new ApiError(500,"Failed to create user");
 }
 
 return res.status(201).json(
    new ApiResponse(200, createdUser,"SUCCESSFULLY REGISTERED USER ")
 )

 










})

export {registerUser};