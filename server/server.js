const express = require('express');
const app = express();
const PORT = 3000;

const connectDB = require('./config/database'); // Import the connectDB function from database.js
const carRoutes = require('./routes/car');

connectDB(); // Call the connectDB function to establish the database connection

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/cars', carRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
