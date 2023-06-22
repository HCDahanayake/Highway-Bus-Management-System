const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const FoundItemsSchema = new Schema({
    PrimarySubject:{
        type: String,
        required: true
    },
    Subject: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true        
    },
}, {timestamps: true})

const FoundItems = mongoose.model('FoundItems',FoundItemsSchema);
module.exports =  FoundItems;