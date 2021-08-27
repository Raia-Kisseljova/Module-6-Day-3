import sequelize from "./index.js";
import Category from "./models/Category.js";
import Product from "./models/Product.js";

Product.belongsTo(Category);
Category.hasMany(Product);

export default { Category, sequelize, Product };
