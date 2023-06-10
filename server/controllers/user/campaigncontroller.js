const User = require("../../database/models/user");
const Camp = require("../../database/models/fundcampaign");

exports.createNewCampaign = async(req, res) => {
    try{
        const {name, age, sex, disease, description, amt} = req.body;
        if(!name || !age || !sex || !disease || !description || !amt){
            return res.status(400).json("some fields empty!");
        }
        if(!req.rootUser){
            return res.status(400).json("you're unauthorized!");
        }
        
        const newCamp = new Camp({
            title : disease,
            campaignHolder : name,
            age : age,
            sex : sex,
            description: description,
            amountRequested: amt,
            active : true
        });

        const saved = await newCamp.save();

        if(!saved){
            return res.status(400).json("couldn't create.");
        }

        const holder = await User.findByIdAndUpdate(req.rootUser._id, {
            $push : {campaigns: {campid: saved._id}}
        });

        if(!holder){
            return res.status(400).json("couldn't save.");
        }

        res.status(200).json("successfully created the campaign.");

    }catch(err){
        console.log(err);
    }
}