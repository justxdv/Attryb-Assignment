const marketplaceInventory = require('../models/marketplaceInventory');

// add cars to marketplace
const addCar = async (req, res) => {
    try {
        const carData = req.body;
        carData.image = req.file.path;
        const newCar = new marketplaceInventory(req.body);
        const savedCar = await newCar.save();
        res.status(201).json({ message: "Car added to marketplace", savedCar });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong", error });
    }
};

// view cars in marketplace
const viewCars = async (req, res) => {
    try {
        const cars = await marketplaceInventory.find();
        res.status(200).json({ message: "Cars in marketplace", cars });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};

// edit cars in marketplace
const editCar = async (req, res) => {
    try {
        const updatedCar = await marketplaceInventory.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json({ message: "Car updated", updatedCar });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};

// delete cars in marketplace
const deleteCars = async (req, res) => {
    try {
        const carstoDelete = req.body.ids;
        await marketplaceInventory.deleteMany({ _id: { $in: carstoDelete } });
        res.status(200).json({ message: "Cars deleted" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};

module.exports = { addCar, viewCars, editCar, deleteCars };