module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Product.associate = (models) => {
    Product.hasMany(models.Likes, {
      foreignKey: 'productId',
      as: 'likes'
    });
    Product.hasMany(models.Purchases, {
      foreignKey: 'productId',
      as: 'purchases'
    });
    Product.belongsTo(models.Categories, {
      foreignKey: 'categoryId',
      as: 'category'
    });
  };

  return Product;
}