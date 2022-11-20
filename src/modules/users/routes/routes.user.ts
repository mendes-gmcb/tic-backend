import { Router } from "express";
import isAuthenticated from "../../../middleware/isAuthenticated";
import UserController from "../controllers/UserController";

const routerUser = Router()
const controllerUser = new UserController()
routerUser.post('/', controllerUser.create)
routerUser.get('/', isAuthenticated, controllerUser.list)
routerUser.get('/show', isAuthenticated, controllerUser.show)

export default routerUser