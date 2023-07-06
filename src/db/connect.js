import { connect } from "mongoose";

export async function conn() {
    try {
        await connect('mongodb://localhost:27017/College')
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.error(error)
    }
}