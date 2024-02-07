const asyncHandle = require("express-async-handler")
const Batch = require("../model/Batch")
const Attendance = require("../model/Attendance")
const Stundent = require("../model/Stundent")



exports.getBatch = asyncHandle(async (req, res) => {
    const result = await Batch.find()
    res.status(200).json({ message: "Batch Fatch Success", result })
})

exports.addBatch = asyncHandle(async (req, res) => {
    const result = await Batch.create(req.body)
    res.status(201).json({ message: "Batch Add Success" })
})
exports.updateBatch = asyncHandle(async (req, res) => {
    const { batchId } = req.params
    await Batch.findByIdAndUpdate(batchId, req.body, { runValidators: true })

    res.status(200).json({ message: "Batch update Success" })
})
exports.deleteBatch = asyncHandle(async (req, res) => {

    const { batchId } = req.params
    await Batch.findByIdAndDelete(batchId)

    res.status(200).json({ message: "Batch delete Success" })
})

exports.getStudent = asyncHandle(async (req, res) => {
    const result = await Stundent.find()
    res.status(200).json({ message: "Student Fatch Success", result })
})
exports.getStudentsByBatch = asyncHandle(async (req, res) => {
    const { batchId } = req.params
    const result = await Stundent.find({ batchId })
    console.log(result);
    res.status(200).json({ message: "Student Add Success", result })
})
exports.addStudent = asyncHandle(async (req, res) => {
    const result = await Stundent.create(req.body)
    res.status(201).json({ message: "Student Add Success" })
})
exports.updateStudent = asyncHandle(async (req, res) => {
    const { StudentId } = req.params
    await Stundent.findByIdAndUpdate(StudentId, req.body, { runValidators: true })

    res.status(200).json({ message: "Student update Success" })
})
exports.deleteStudent = asyncHandle(async (req, res) => {

    const { StudentId } = req.params
    await Stundent.findByIdAndDelete(StudentId)

    res.status(200).json({ message: "Student delete Success" })
})




exports.getAttendance = asyncHandle(async (req, res) => {
    const { studId } = req.params
    const result = await Attendance.find({ studId })
    res.status(200).json({ message: "Attendance Fatch Success", result })
})
exports.addAttendance = asyncHandle(async (req, res) => {

    const x = req.body.map(item => {
        return { studId: item.studId, date: item.date, isPresent: item.isPresent }
    })
    const result = await Attendance.findOne({ studId: x[0].studId, date: x[0].date })
    if (result) {
        return res.status(400).json({ message: " Duplicate Attendance" })
    }
    await Attendance.create(x)
    res.status(201).json({ message: "Attendance Add Success" })
})
exports.updateAttendance = asyncHandle(async (req, res) => {
    const { AttendanceId } = req.params
    await Batch.findByIdAndUpdate(AttendanceId, req.body, { runValidators: true })

    res.status(200).json({ message: "Attendance update Success" })
})
exports.deleteAttendance = asyncHandle(async (req, res) => {

    // const { AttendanceId } = req.params
    await Attendance.deleteMany()

    res.status(200).json({ message: "Attendance delete Success" })
})