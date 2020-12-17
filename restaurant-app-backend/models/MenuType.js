
module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('MenuType',
        {
            title: { type: DataTypes.STRING(255)},
            image: { type: DataTypes.STRING(255)},
            group: { type: DataTypes.INTEGER}
        },
        {
            tableName: 'menutype',
            timestamps: false
        }
    );
    model.associate = models => {
        model.hasMany(models.Menu, { foreignKey: 'type' })
    };
    return model;
}