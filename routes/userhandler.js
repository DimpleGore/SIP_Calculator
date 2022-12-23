const router = require("express").Router();
const sipController = require("../controllers/siphandler")
const userController = require("../controllers/userhandler")

router.post("/signup", userController.register)
router.post("/signin", userController.login)

module.exports=router