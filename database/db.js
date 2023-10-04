const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect("mongodb+srv://root:admin@appwebunb.joehx55.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
