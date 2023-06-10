const router = require("express").Router();
const authController = require("../controllers/user/auth");
const campController = require("../controllers/user/campaigncontroller");
const authenticate = require("../middleware/authenticate");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/newcampaign", authenticate, campController.createNewCampaign);

router.get("/checkuser", authenticate, (req,res) => {
    console.log("hwyy");
    res.send(req.rootUser);
});

module.exports = router;