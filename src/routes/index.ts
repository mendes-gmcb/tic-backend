import { Router } from "express";
import routerCelebration from "../modules/celebrations/routes/routes.celebration";
import routerOption from "../modules/options/routes/routes.option";
import routerPastoral from "../modules/pastorals/routes/routes.pastoral";
import routerSession from "../modules/users/routes/routes.session";
import routerUser from "../modules/users/routes/routes.user";

const router = Router()
router.use('/pastoral', routerPastoral)
router.use('/user', routerUser)
router.use('/celebration', routerCelebration)
router.use('/pastoral/option', routerOption)
router.use('/session', routerSession)

export default router