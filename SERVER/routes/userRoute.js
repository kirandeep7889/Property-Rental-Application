const express=require("express");
const registerUser = require("../controllers/userControllers/registerUser");
const authenticateUser = require("../controllers/userControllers/autthenticateUser");
const validateRegisterInput = require("../Validators/validateSignupInput");
const validateLoginInput = require("../Validators/validateSignupInput");
const auth = require("../middlewares/auth");
const editProfile = require("../controllers/userControllers/editUserProfile");
const userRoutes=express.Router();


userRoutes.post("/register", validateRegisterInput, registerUser);
userRoutes.post("/authenticate", validateLoginInput, authenticateUser);
userRoutes.patch("/editProfile",auth ,editProfile);



module.exports=userRoutes;


