import { Router } from "express";
import { studentController } from "../controllers/studentController.js";

const route = Router()

route.post('/user', (req, res) => studentController.create(req, res))
route.get('/user', (req, res) => studentController.getAll(req, res))
route.get('/user/:id', (req, res) => studentController.getById(req, res))
route.put('/user/update/:id', (req, res) => studentController.update(req, res))

export default route