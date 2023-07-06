import { Student } from "../models/studentModel.js";

export const studentController = {

    create: async (req, res) => {
        const {name, lastname, grade} = req.body
        try {
            const student = {
                name,
                lastname,
                grade
            }

            await Student.create(student)
            res.status(201).json({
                message: 'Student created',
                data: student
            })

        } catch (error) {
            console.error(error)
        }
    },

    getAll: async (req, res) => {
        try {
            const response = await Student.find()
            res.status(200).json({
                data: response
            })
        } catch (error) {
            console.error(error)
        }
    },

    getById: async (req, res) => {
        try {
            const {id} = req.params
            const response = await Student.findById(id)
            res.status(200).json({
                data: response
            })
        } catch (error) {
            console.error(error)
        }
    },

    update: async (req, res) => {
        try {
            const {id} = req.params
            const body = req.body
            await Student.updateOne({_id: id}, body)
            res.status(200).json({
                message: 'Student updated'
            })
        } catch (error) {
            console.error(error)
        }
    }
}