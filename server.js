const express = require("express");
const connectDB = require('./config/dbConnection')
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/v1/contacts', require('./routes/contactRoutes'));
app.use('/api/v1/users', require('./routes/userRoutes'));

app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})