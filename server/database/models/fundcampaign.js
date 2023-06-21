const mongoose = require('mongoose');


const fundCampaignSchema = new mongoose.Schema({
    title : String,
    campaignHolder : String,
    age : Number,
    gender : String,
    description: String,
    state : String,
    city : String,
    accno : String,
    accholder : String,
    ifsc : String,
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