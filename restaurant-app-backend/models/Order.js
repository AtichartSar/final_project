
module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Order',
        {
            name: { type: DataTypes.STRING(255) },
            type_name: { type: DataTypes.STRING(255) },
            price: { type: DataTypes.FLOAT },
        },
        {
            tableName: 'order',
        }
    );
    model.associate = models => {
    //     // model.hasMany(models.Menu, { foreignKey: 'menutype_id' })
        model.belongsTo(models.Invoice, { foreignKey: 'invoice_id' });
    };
    return model;
}