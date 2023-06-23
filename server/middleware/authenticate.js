const jwt = require("jsonwebtoken");
const User = require("../database/models/user");

const Authenticate = async (req, res, next) => {
  try {
    // console.log(req.cookies);
    const token = await req.headers.authorization.split(" ")[1];
    // const token = req.cookies.jwebtoken;
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(verified);

    const rootUser = await User.findOne({
      _id: verified._id,
      "tokens.jwtoken": token,
    });
    if (!rootUser) {
      throw new Error("no such user");
    }
    req.token = token;
    req.rootUser = rootUser;

    next();
  } catch (err) {
    res.status(401).send("Didn't find token!");
    console.log(err);
  }
};

module.exports = Authenticate;
