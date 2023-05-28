const OEM_Specs = require('../models/oemSpecs.js');

// to get count of OEM models available
const getOEMCount = async (req, res) => {
    try {
        const count = await OEM_Specs.countDocuments();
        res.status(200).json({ message: "OEM count", count });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};

// to get all OEM models' specs
const getAllOEMSpecs = async (req, res) => {
    try {
        const specs = await OEM_Specs.find();
        res.status(200).json({ message: "OEM specs", specs });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};

// to search for a specific OEM model's specs
const getOEMSpecs = async (req, res) => {
    try {
        const specs = await OEM_Specs.find({ 
            model_name: req.params.model,
            model_year: req.params.year 
        });
        console.log(specs);
        res.status(200).json({ message: "OEM specs", specs });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", error });
    }
};



module.exports = { getOEMCount, getOEMSpecs, getAllOEMSpecs };