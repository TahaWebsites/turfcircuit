const { default: mongoose } = require("mongoose");

const dbConnection = () => {
    mongoose
        .connect(process.env.dbUrl)
        .then(() => console.log(`Database Connected.....`))
        .catch((err) => console.log(err));
}

module.exports = dbConnection;