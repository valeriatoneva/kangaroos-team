const sqlite3 = require('sqlite3').verbose(); 
const connectDB = async () => {
    try {
        const db = new sqlite3.Database('your_sqlite_database.db'); // Connect to SQLite database file
        console.log('Connected to the SQLite database');
        

        db.close();
    } catch (error) {
        console.error('Could not connect to the SQLite database', error);
        process.exit(1); 
    }
};

module.exports = connectDB;
