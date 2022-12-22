const router = require("express").Router();
const sipController = require("../controllers/siphandler")


router.post("/sip_amount", sipController.calculateSIP)

module.exports=router