
module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Invoice',
        {
            price: { type: DataTypes.FLOAT },
            title: { type: DataTypes.STRING },
            count: { type: DataTypes.FLOAT }
        },
        { tableName: 'invoice', })
    model.associate = models => {
        //จำเป็นต้องมี user
        model.belongsTo(models.User, { foreignKey: 'user_order' });

    };
    return model
}