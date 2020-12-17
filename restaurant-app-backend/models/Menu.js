

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Menu',
        {
            title: { type: DataTypes.STRING(255) },
            price: { type: DataTypes.FLOAT },
            rate: { type: DataTypes.FLOAT },
            description: { type: DataTypes.STRING(255) },
            image: { type: DataTypes.STRING(255) }
        },
        {
            tableName: 'menu',
        }
    );
    model.associate = models => {
        model.belongsTo(models.MenuType, { foreignKey: 'type' });
        model.hasMany(models.Review, { foreignKey: 'menu_id' })
    };
    return model
}