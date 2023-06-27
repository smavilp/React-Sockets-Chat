const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("DB online");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dbConnection
};
