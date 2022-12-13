//importing models folder schema data
const empModel = require('../models/employeModels')

//no need of db collection step like driver code

const getEmployes = async (req, res) => {
  try {
    const employ = await empModel.find()
    res.send({ status: 'success', employ })
  } catch (err) {
    console.log("Error fetching employ from DB")
    res.status(500).send({ status: 'error', msg: 'Error fetching employ from DB' })
  }
}

const getEmployesByID = async (req, res) => {
  const { employID } = req.params

  try {
    const employ = await empModel.findById(employID)
    if (!employ) {
      res.status(404).send({ status: 'error', msg: 'employ not found' })
    } else {
      res.send({ status: 'success', employ: employ })
    }
  } catch (err) {
    console.log("Error fetching employ from DB")
    res.status(500).send({ status: 'error', msg: 'Error fetching employ from DB' })
  }

}

const postEmployes = async (req, res) => {
  const { name, jobName, hireDate, salary } = req.body;

  try {
    const resultEmploy = await UserModel.create({ name, jobName, hireDate, salary })
    res.status(201).send({ status: 'success', employ: resultEmploy })
  } catch (err) {
    //log in a file for debug err
    res.status(500).send({ status: 'error', msg: err.errors })
  }

}

const updateEmployesById = async (req, res) => {

  const { employID } = req.params
  const updatedEmployData = req.body //{language, name, id}
  try {
    //DB Operation
   const updateEmploy =  await empModel.findByIdAndUpdate(employID, updatedEmployData, { new: true, runValidators: true })
    res.send({ status: 'Updated Successfully', movie: updateEmploy })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'Cannot Update employ' })
  }

}

const deleteEmployesByID = async (req, res) => {
  const { employID } = req.params
  try {
    //delete Operation
    const deletedEmploy = await empModel.findByIdAndDelete(employID)
    res.send({ status: 'Deleted Successfully', movie: deletedEmploy })
  } catch (err) {
    res.status(500).send({ status: 'Cannot delete employ due to internal error' })
  }
}

//Common JS Module
module.exports = {
  getEmployes,
  getEmployesByID,
  postEmployes,
  updateEmployesById,
  deleteEmployesByID
}