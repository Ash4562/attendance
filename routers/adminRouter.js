const { getBatch, addBatch, updateBatch, deleteBatch, getAttendance, addAttendance, deleteAttendance, updateAttendance, deleteStudent, updateStudent, addStudent, getStudent, getStudentsByBatch } = require("../controller/adminController")

const router = require("express").Router()

router


    .get("/batch", getBatch)
    .post("/batch-add", addBatch)
    .put("/batch-update/:batchId", updateBatch)
    .delete("batch-delete/:batchId", deleteBatch)



    .get("/student", getStudent)
    .get("/student-by-batch/:batchId", getStudentsByBatch)
    .post("/student-add", addStudent)
    .put("/student-update/:StudentId", updateStudent)
    .delete("/student-delete/:StudentId", deleteStudent)



    .get("/attendance/:studId", getAttendance)
    .post("/attendance-add", addAttendance)
    .put("/attendance-update/:AttendanceId", updateAttendance)
    .delete("/attendance-delete", deleteAttendance)

module.exports = router