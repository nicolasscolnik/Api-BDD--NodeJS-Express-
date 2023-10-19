import { Router } from "express";
import usersRoutes from "./usersRoutes.js";
import rolesRoutes from "./rolesRoutes.js";


const router=Router()

router.use("/roles",rolesRoutes)
router.use("/users",usersRoutes)

export default router