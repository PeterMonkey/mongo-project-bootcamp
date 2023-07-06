import { Schema, model } from 'mongoose'
import { studentSchema } from './studentModel.js'

const teacherSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    class: [studentSchema] 
},
{timestamps: true}
)

export const Teacher = model('Teacher', teacherSchema)