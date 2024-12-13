import { Router } from "express";
import { loginUser, logoutUser, myAccount, registerUser } from "../controllers/userController.js";
import { authenticate } from "../middlewares/auth.js";



const router =Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

router.use(authenticate)
router.route("/logout").post(logoutUser)
router.route("/account").get(myAccount)


export default router;