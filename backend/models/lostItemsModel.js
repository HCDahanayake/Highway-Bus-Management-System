const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const LostItemsSchema = new Schema({
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

const LostItems = mongoose.model('LostItems', LostItemsSchema);
module.exports =  LostItems;