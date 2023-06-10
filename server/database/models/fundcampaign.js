const mongoose = require('mongoose');


const fundCampaignSchema = new mongoose.Schema({
    title : String,
    campaignHolder : String,
    age : Number,
    sex : String,
    description: String,
    amountRequested: Number,
    amountRaised: {
        type : Number,
        default : 0
    },
    active: Boolean,
    donors: {
        type : Array,
        default: []
    }
});


const FundCampaign = mongoose.model('FundCampaign', fundCampaignSchema);

module.exports = FundCampaign;