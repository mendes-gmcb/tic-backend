import { Router } from "express";
import isAuthenticated from "../../../middleware/isAuthenticated";
import CelebrationController from "../controllers/CelebrationController";

const routerCelebration = Router()
const controllerCelebration = new CelebrationController()
routerCelebration.post('/', isAuthenticated, controllerCelebration.create)
routerCelebration.get('/', isAuthenticated, controllerCelebration.list)
routerCelebration.get('/:id', isAuthenticated, controllerCelebration.show)
routerCelebration.delete('/:id', isAuthenticated, controllerCelebration.delete)
routerCelebration.put('/:id', isAuthenticated, controllerCelebration.update)

export default routerCelebration