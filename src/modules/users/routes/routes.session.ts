import { Router } from "express";
import SessionController from "../controllers/SessionController";

const routerSession = Router()
const controllerSession = new SessionController()
routerSession.post('/', controllerSession.create)

export default routerSession