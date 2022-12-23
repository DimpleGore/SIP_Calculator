const router = require("express").Router();
const sipController = require("../controllers/siphandler")
const authController = require("../middlewares/auth")
const userController = require("../controllers/userhandler")

router.post("/signup", userController.register)
router.post("/signin", userController.login)

router.post("/sip_amount", authController, sipController.calculateSIP)

module.exports=router