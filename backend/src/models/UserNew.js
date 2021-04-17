import Conn from "../config/database.js";
import Sequelize from "sequelize";

const UserNew = Conn.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

export default UserNew

// module.exports = {
//   UserNew,
// };
