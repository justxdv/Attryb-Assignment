const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

const userRoutes = require('./routes/userRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const oemRoutes = require('./routes/oemRoutes');

dotenv.config();

app.use(express.json());
app.use(cors());

const mongoose = require('mongoose');
const path = require('path');
dotenv.config();

// connection to mongodb

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(console.log('Connected to mongodb'))
.catch(err => console.log('Error connecting to mongodb', err))

app.use('/api', userRoutes);
app.use('/api', inventoryRoutes);
app.use('/api', oemRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(process.env.PORT || "5000", () => {
    console.log(`Backend Server is running on port ${process.env.PORT}`);
})
