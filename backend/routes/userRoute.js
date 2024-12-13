import { Router } from "express";
import { changePassword, getUsers, loginUser, logoutUser, myAccount, registerUser } from "../controllers/userController.js";
import { authenticate } from "../middlewares/auth.js";



const router =Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

router.use(authenticate)
router.route("/logout").post(logoutUser)
router.route("/account").get(myAccount)
router.route("/change-password").post(changePassword)
router.route("/all").get(getUsers)



export default router;