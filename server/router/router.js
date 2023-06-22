const router = require("express").Router();
const authController = require("../controllers/user/auth");
const campController = require("../controllers/fcamps/campaigncontroller");
const expController = require("../controllers/anonexpressions/expressioncontroller");
const payController = require("../controllers/payments/paymentcontroller");
const authenticate = require("../middleware/authenticate");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/logout", authenticate, authController.logout);

router.post("/newcampaign", authenticate, campController.createNewCampaign);

router.get("/allcamps", campController.getAllCampaigns);

router.get("/findcamp/:id", campController.findCampaign);

router.get("/finishcamp/:id", authenticate, campController.finishCampaign);

router.post("/newexpression", authenticate, expController.newExpression);

router.get("/allexps", expController.getAllExps);

router.get("/findexpression/:id", expController.findExpression);

router.get("/deleteexpression/:id", authenticate, expController.deleteExpression);

router.post("/addcomment", authenticate, expController.addComment);

router.post("/deletecomment", authenticate, expController.deleteComment);

router.post("/createpayment", payController.createPayment);

router.post("/paymentdetails", payController.payDetails);

router.post("/confirmpayment", campController.confirmPayment);

router.get("/checkuser", authenticate, (req,res) => {
    res.send(req.rootUser);
});

module.exports = router;