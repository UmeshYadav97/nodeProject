const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect("mongodb+srv://umesh:umesh2611@cluster0.ir2pt.mongodb.net/AuthDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}