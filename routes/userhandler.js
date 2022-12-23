const router = require("express").Router();
const userController = require("../controllers/userhandler")

router.post("/signup", userController.register)
router.post("/signin", userController.login)

module.exports=router