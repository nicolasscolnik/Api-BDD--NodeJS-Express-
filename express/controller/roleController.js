import Role from "../Models/Role.js";
// console.log(`🚀 ~ Role:`, Role)

class RoleController {
  constructor() { }
  getAllRoles = async (req, res) => {
    try {
      const roles = await Role.findAll({ attributes: ["id", "name"] });
      res.status(200).send({
        success: true,
        message: "Todos los roles que hay",
        data: roles,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getRoleById = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await Role.findOne({
        where: { id },
        attributes: ["id", "name"],
      });

      if (!role) throw new Error("No hay role con ese id");

      res.status(200).send({
        success: true,
        message: "El role",
        data: role,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  createRole = async (req, res) => {
    try {
      const { name } = req.body;
      //  if (!name) throw new Error("El name no puede estar vacio");
      //  console.log(`🚀 ~ RoleController ~ createRole= ~ name:`, name);
      const role = await Role.create({ name });
      console.log(`🚀 ~ RoleController ~ createRole= ~ role:`, role);
      if (!role) throw new Error("El role no puede estar vacio");

      res
        .status(200)
        .send({ success: true, message: "role crerado", data: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  updateRole = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const role = await Role.update(
        { name },
        {
          where: { id },
        }
      );
      if (role[0] === 0) throw new Error("no se modifico nada");
      res
        .status(200)
        .send({ success: true, message: "role modificado", data: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  deleteRole = async (req, res) => {
    try {
      const { name } = req.body;
      const role = await Role.destroy({
        where: { name }
      });
      res
        .status(200)
        .send({ success: true, message: "role " + name + " borrado", data: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default RoleController;
