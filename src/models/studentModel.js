import { Schema, model } from "mongoose";

export const studentSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    grade: {
        type: Number,
        require: true
    }
},
{timestamps: true}
)

export const Student = model('Student', studentSchema)