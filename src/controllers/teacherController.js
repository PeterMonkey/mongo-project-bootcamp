import { Student } from "../models/studentModel.js";
import { Teacher } from "../models/teacherModel.js";

export const teacherController = {

    create: async (req, res) => {
        try {
            const {name, lastname} = req.body
            const response = await Teacher.create({
                name,
                lastname
            })
            res.status(201).json({
                data: response
            })
        } catch (error) {
            console.error(error)
        }
    },
    update: async (req, res) => {
        try {
            const {id} = req.params
            const {st_id} = req.body
            const student = await Student.findById(st_id)
            const response = await Teacher.findByIdAndUpdate(id, {$push: {class: student}})
            res.status(200).json({
                data: response
            })
        } catch (error) {
            console.error(error)
        }
    }
}