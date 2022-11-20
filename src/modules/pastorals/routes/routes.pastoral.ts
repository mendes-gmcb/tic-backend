import { Router } from "express";
import isAuthenticated from "../../../middleware/isAuthenticated";
import PastoralController from "../controllers/PastoralController";

const routerPastoral = Router()
const controllerPastoral = new PastoralController()
routerPastoral.post('/', isAuthenticated, controllerPastoral.create)
routerPastoral.get('/', isAuthenticated, controllerPastoral.list)
routerPastoral.get('/:id', isAuthenticated, controllerPastoral.show)
routerPastoral.delete('/:id', isAuthenticated, controllerPastoral.delete)
routerPastoral.put('/:id', isAuthenticated, controllerPastoral.update)

export default routerPastoral