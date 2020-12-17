module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Employee',
        {
            name: { type: DataTypes.STRING(255)}

        },
        { tableName: 'employee', })
    // model.associate = models => {
        // model.hasMany(models.Order, { foreignKey: 'invoice_id' })
    // };
    return model
}