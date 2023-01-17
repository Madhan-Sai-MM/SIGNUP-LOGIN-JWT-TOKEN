//importing models folder schema data
const studentModel = require('../models/studentModels')

//no need of db collection step like driver code

const getStudents = async (req, res) => {
  try {
    const student = await studentModel.find()
    res.send({ status: 'success', student })
  } catch (err) {
    console.log("Error fetching student from DB")
    res.status(500).send({ status: 'error', msg: 'Error fetching student from DB' })
  }
}

const getStudentsByID = async (req, res) => {
  const { studentID } = req.params

  try {
    const student = await studentModel.findById(studentID)
    if (!student) {
      res.status(404).send({ status: 'error', msg: 'student not found' })
    } else {
      res.send({ status: 'success', student: student })
    }
  } catch (err) {
    console.log("Error fetching student from DB")
    res.status(500).send({ status: 'error', msg: 'Error fetching student from DB' })
  }

}

const postStudents = async (req, res) => {
  const postData = req.body;

  try {
    const resultStudent = await studentModel.create(postData)
    res.status(201).send({ status: 'success', student: resultStudent })
  } catch (err) {
    console.log(err)
    //log in a file for debug err
    res.status(500).send({ status: 'error', msg: err.errors })
  }

}

const updateStudentsById = async (req, res) => {

  const { studentID } = req.params
  const updatedStudentsData = req.body //{language, name, id}
  try {
    //DB Operation
   const updateStudent =  await studentModel.findByIdAndUpdate(studentID, updatedStudentsData, { new: true, runValidators: true })
    res.send({ status: 'Updated Successfully', student: updateStudent })
  } catch (err) {
    console.log(err)
    res.status(500).send({ status: 'error', msg: 'Cannot Update student' })
  }

}

const deleteStudentsByID = async (req, res) => {
  const { studentID } = req.params
  try {
    //delete Operation
    const deletedStudent = await studentModel.findByIdAndDelete(studentID)
    res.send({ status: 'Deleted Successfully', student: deletedStudent })
  } catch (err) {
    res.status(500).send({ status: 'Cannot delete student due to internal error' })
  }
}

//Common JS Module
module.exports = {
  getStudents,
  getStudentsByID,
  postStudents,
  updateStudentsById,
  deleteStudentsByID
}