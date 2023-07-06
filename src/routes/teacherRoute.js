import { Router } from "express";
import { teacherController } from "../controllers/teacherController.js";

const route = Router()

route.post('/teacher', (req, res) => teacherController.create(req, res))
route.put('/teacher/update/:id', (req, res) => teacherController.update(req, res))

export default route