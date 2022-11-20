import { Router } from "express";
import isAuthenticated from "../../../middleware/isAuthenticated";
import OptionController from "../controllers/OptionController";

const routerOption = Router()
const controllerOption =  new OptionController()
routerOption.post('/:id', isAuthenticated, controllerOption.create)
routerOption.get('/:id', isAuthenticated, controllerOption.show)
routerOption.put('/:id', isAuthenticated, controllerOption.update)

export default routerOption