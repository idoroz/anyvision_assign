
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    message: {
        type: String,
    },
})
module.exports = mongoose.model("Data", DataSchema);

