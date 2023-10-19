import { Router } from "express";
import RoleController from "../controller/roleController.js";
const rolesRoutes = Router();
const roleController = new RoleController();

rolesRoutes.get("", roleController.getAllRoles);
rolesRoutes.get("/:id", roleController.getRoleById);
rolesRoutes.post("", roleController.createRole);
rolesRoutes.put("/:id", roleController.updateRole);
rolesRoutes.delete("/", roleController.deleteRole);

export default rolesRoutes;
