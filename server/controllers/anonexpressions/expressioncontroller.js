const User = require("../../database/models/user");
const Expression = require("../../database/models/expression");

//Add a new anonymous expression.
exports.newExpression = async (req, res) => {
  try {
    const { title, state, city, expression } = req.body;
    if (!title || !state || !city || !expression) {
      return res.status(400).json("some fields empty!");
    }
    if (!req.rootUser) {
      return res.status(400).json("you're unauthorized!");
    }

    const newExp = new Expression({
      title: title,
      age: req.rootUser.age,
      gender: req.rootUser.gender,
      state: state,
      city: city,
      expression: expression,
    });

    const saved = await newExp.save();

    if (!saved) {
      return res.status(400).json("couldn't add expression.");
    }

    const holder = await User.findByIdAndUpdate(req.rootUser._id, {
      $push: { expressions: { expid: saved._id.toString() } },
    });

    if (!holder) {
      return res.status(400).json("couldn't save.");
    }

    res.status(200).json("successfully added the expression.");
  } catch (err) {
    console.log(err);
  }
};

//Get all the anonymous expressions.
exports.getAllExps = async (req, res) => {
  try {
    const exps = await Expression.find();
    if (!exps) {
      res.status(200).json({ error: "No expressions." });
    } else {
      res.send(exps);
    }
  } catch (err) {
    console.log(err);
  }
};

//Add a comment.
exports.addComment = async (req, res) => {
  try {
    const { eid, uid, age, gender, comment } = req.body;

    if (!eid || !uid || !age || !gender || !comment) {
      return res.status(400).json("some fields empty!");
    }
    if (!req.rootUser) {
      return res.status(400).json("you're unauthorized!");
    }

    const added = await Expression.findByIdAndUpdate(eid, {
      $push: {
        comments: { uid: uid, age: age, gender: gender, comment: comment },
      },
    });

    if (!added) {
      return res.status(400).json("couldn't add comment.");
    }

    res.status(200).json("successfully added the comment.");
  } catch (err) {
    console.log(err);
  }
};

//Delete a comment.
exports.deleteComment = async (req, res) => {
  try {
    const { eid, uid, age, gender, comment } = req.body;

    if (!eid || !uid || !age || !gender || !comment) {
      return res.status(400).json("some fields empty!");
    }
    if (!req.rootUser) {
      return res.status(400).json("you're unauthorized!");
    }

    const deleted = await Expression.findByIdAndUpdate(eid, {
      $pullAll: {
        comments: [{ uid: uid, age: age, gender: gender, comment: comment }],
      },
    });

    if (!deleted) {
      return res.status(400).json("couldn't delete.");
    }

    res.status(200).json("deleted comm.");
  } catch (err) {
    console.log(err);
  }
};

//Find an expression.
exports.findExpression = async (req, res) => {
  try {
    const eid = req.params.id;
    console.log(eid);

    const exp = await Expression.findById(eid);

    if (!exp) {
      return res.status(400).json("no exp!");
    }
    res.send(exp);
  } catch (err) {
    console.log(err);
  }
};

//Delete an expression.
exports.deleteExpression = async (req, res) => {
  try {
    if (!req.rootUser) return res.status(401).json("you are unauthorized!");

    const eid = req.params.id;

    const deletedUserExp = await User.findByIdAndUpdate(req.rootUser._id, {
      $pullAll: {
        expressions: [{ expid: eid }],
      },
    });

    if (!deletedUserExp) return res.status(400).json("could not delete exp!");

    const deleted = await Expression.findByIdAndDelete(eid);

    if (!deleted) return res.status(400).json("could not delete exp!");

    res.status(200).json("deleted the expression!");
  } catch (err) {
    console.log(err);
  }
};
