const router = require("express").Router();
const authController = require("../controllers/user/auth");
const campController = require("../controllers/fcamps/campaigncontroller");
const expController = require("../controllers/anonexpressions/expressioncontroller");
const authenticate = require("../middleware/authenticate");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/newcampaign", authenticate, campController.createNewCampaign);

router.get("/allcamps", authenticate, campController.getAllCampaigns);

router.post("/newexpression", authenticate, expController.newExpression);

router.get("/allexps", expController.getAllExps);

router.get("/findexpression/:id", expController.findExpression);

router.post("/addcomment", authenticate, expController.addComment);

router.post("/deletecomment", authenticate, expController.deleteComment);

router.get("/checkuser", authenticate, (req,res) => {
    console.log("hwyy");
    res.send(req.rootUser);
});

module.exports = router;