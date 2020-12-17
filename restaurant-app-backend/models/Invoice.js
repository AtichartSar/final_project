
module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Invoice',
        {
            price: { type: DataTypes.FLOAT },
            title: { type: DataTypes.STRING },
            count: { type: DataTypes.FLOAT }
        },
        { tableName: 'invoice', })
    // model.associate = models => {
        // model.hasMany(models.Order, { foreignKey: 'invoice_id' })
        // model.hasOne(models.Employee, { foreignKey: 'invoice_id' })

    // };
    return model
}