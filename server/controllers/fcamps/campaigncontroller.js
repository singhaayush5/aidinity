const User = require("../../database/models/user");
const Camp = require("../../database/models/fundcampaign");

exports.createNewCampaign = async (req, res) => {
  try {
    const { name, age, gender, disease, description, amt, state, city } = req.body;
    if (!name || !age || !gender || !disease || !description || !amt || !state || !city) {
      return res.status(400).json("some fields empty!");
    }
    if (!req.rootUser) {
      return res.status(400).json("you're unauthorized!");
    }

    const newCamp = new Camp({
      title: disease,
      campaignHolder: name,
      age: age,
      gender: gender,
      description: description,
      amountRequested: amt,
      state: state,
      city: city,
      active: true,
    });

    const saved = await newCamp.save();

    if (!saved) {
      return res.status(400).json("couldn't create.");
    }

    const holder = await User.findByIdAndUpdate(req.rootUser._id, {
      $push: { campaigns: { campid: saved._id } },
    });

    if (!holder) {
      return res.status(400).json("couldn't save.");
    }

    res.status(200).json("successfully created the campaign.");
  } catch (err) {
    console.log(err);
  }
};

exports.getAllCampaigns = async (req, res) => {
  try {
    const camps = await Camp.find();
    if (!camps) {
      res.status(200).json({ error: "No fcamps." });
    } else {
      res.send(camps);
    }
  } catch (err) {
    console.log(err);
  }
};
