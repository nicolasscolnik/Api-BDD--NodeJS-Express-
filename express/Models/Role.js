import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model {}

Role.init(
  {
    // id: { type: DT.INTEGER, primaryKey: true },
    name: {
      type: DT.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Role",
  }
);

export default Role;
