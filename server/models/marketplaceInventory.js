const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marketplaceSchema = new Schema({
    dealer_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    car: {
        type: Schema.Types.ObjectId,
        ref: 'OemSpecs',
        required: true,
    },
    KMs_on_odometer: { 
        type: Number, 
        required: true 
    },
    major_scratches: { 
        type: Boolean, 
        required: true 
    },
    original_paint: { 
        type: Boolean, 
        required: true 
    },
    number_of_accidents_reported: { 
        type: Number, 
        required: true 
    },
    number_of_previous_buyers: { 
        type: Number, 
        required: true 
    },
    registration_place: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true
    },
    title: { 
        type: String, 
        required: true 
    },
}, { timestamps: true });

module.exports = mongoose.model('MarketplaceInventory', marketplaceSchema);