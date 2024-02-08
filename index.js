const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const { once } = require("./model/Batch")
require("dotenv").config({ path: "./.env" })


mongoose.connect(process.env.MONGO_URL)
const app = express()

app.use(express.static(path.join(__dirname, "dist", "index.html")))
app.use(cors())
app.use(express.json())

app.use("/api/admin", require("./routers/adminRouter"))

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    // res.status(404).json({ message: "Resource Not Found" })
})
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "something Went Wrong" })
})
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTION");
    app.listen(process.env.PORT, console.log("SERVER RUnning"))
})