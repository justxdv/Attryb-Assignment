const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oemSchema = new Schema({
    model_name: {
        type: String,
        required: true,
        lowercase: true,
    },
    model_year: {
        type: Number,
        required: true,
    },
    list_price: {
        type: Number,
        required: true,
    },
    available_colors: {
        type: [String],
        required: true,
    },
    mileage: {
        type: Number,
        required: true,
    },
    power_BHP: {
        type: Number,
        required: true,
    },
    max_speed: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('OEMSpecs', oemSchema);