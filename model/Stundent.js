const mongoose = require("mongoose")
const StundentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    batchId: {
        type: mongoose.Types.ObjectId,
        ref: "batch",
        required: true
    }
}, { timestamps: true })
module.exports = mongoose.model("stundent", StundentSchema)