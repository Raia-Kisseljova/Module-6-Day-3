import sequelize from "../index.js";
import s from "sequelize";
const { DataTypes } = s;

const Category = sequelize.define("category", {
  categoryId: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

export default Category;
