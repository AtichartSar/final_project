
module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Review',
        {
            rate: { type: DataTypes.INTEGER },
            description: { type: DataTypes.STRING(255) },
        },
        {
            tableName: 'review',
        }
    );
    model.associate = models => {
    //     // model.hasMany(models.Menu, { foreignKey: 'menutype_id' })
    model.belongsTo(models.Menu, { foreignKey: 'menu_id' })
    // model.belongsTo(models.MenuType, { foreignKey: 'type' })
    };
    return model;
}