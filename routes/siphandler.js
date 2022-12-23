const router = require("express").Router();
const sipController = require("../controllers/siphandler")
const authController = require("../middlewares/auth")

router.post("/sip_amount", authController, sipController.calculateSIP)

module.exports=router