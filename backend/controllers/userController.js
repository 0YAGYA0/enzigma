import { User } from "../models/userModel";

import { generateTokens } from "../utils/generateToken";


const registerUser = async (req, res,next) => {
    try {
        const {name, username, email, password } = req.body;

        if(!email || !password || !username ||!name){
            return next(new apiError(401,"Enter the required fields"))
        }

        const checkUser=await User.findOne({$or: [{ username: username }, { email: email }] })
        if(checkUser){
            return next(new apiError(400,"user already exists select different username or email"))
        }

        const newUser = new User({ name:name, username:username, email: email, password:password });
        await newUser.save();

        if(!newUser){
            return next(new apiError(401,"Unable to add user"))
        }

        return res.status(200).json(
            new apiResponse(200,"User registered successfully")
        )
    } catch (error) {
        return next (new apiError(500,"Internal server error"))
    }
};

const loginUser=async(req,res,next)=>{

    try {
        const {username,password}=req.body
    
        if(!username || !password){
            return next(new apiError(400,"input fields required"))
        }
    
        const user= await User.findOne({username:username})
        
        
        if(!user){
            return next(new apiError(400,"User does not exist"))
        }
        
    
        const checkPassword=await user.isPasswordCorrect(password)
        
        if(!checkPassword){
            return next(new apiError(400,"Invalid user credentials"))
        }

        const {refreshToken}= await generateTokens(user._id)


        const options = {
            httpOnly: true,
            secure: true
        }

        return res.status(200)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new apiResponse(200,"Logged in successfully")
        )

    } catch (error) {
        next(new apiError(400,"Internal server Error while logging in"))
    }
}

const logoutUser=async(req,res,next)=>{

    try {
        const user =await User.findByIdAndUpdate(
            req.user._id,
            {
                $unset:{
                    refreshToken:1,
                }
            },
            {
                new:true,
            }
        )

        if(!user){
            return next(new apiError(400,"Unable to logout try again"))
        }


        const options={
            httpOnly:true,
            secure:true
        }

        return res.status(200)
            .clearCookie("refreshToken",options)
            .json(
                new apiResponse(200,"User logged out successfully")
            )
    } catch (error) {
        next(new apiError(400,"Internal Server error"))
    }
    
}

const changePassword= async(req,res,next)=>{

    try {
        const {oldPassword , newPassword}=req.body
    
        const user= await User.findById(req.user?._id)
    
        const checkPassword= await user.isPasswordCorrect(oldPassword)
    
        if(!checkPassword){
            return next(new apiError(400,"Password does not match"))
        }
    
        user.password= newPassword
        await user.save()

        return res.status(200).json(
            new apiResponse(200,"Password changed successfully")
        )
    } catch (error) {
        return next(new apiError(401,"Internal server error"))
    }

}

const deleteUserAccount = async(req,res,next)=>{
    try {
        //const {userId} =req.body
        //const user
        const deleteUser =await User.findByIdAndDelete(req.user._id)

        if(!deleteUser){
            return next(new apiError(400,"Unable to find user check user id"))
        }

        const checkuser= await User.findById(req.user._id)
        if(checkuser)
            {
                return next(new apiError(400,"user not deleted"))
            }
        
        return res.status(200).json(
            new apiResponse(200,"User deleted successfully")
        )
 
    } catch (error) {
        return next (new apiError(500,"Internal server error"))    }
}

export {registerUser,loginUser,logoutUser,changePassword, deleteUserAccount}
