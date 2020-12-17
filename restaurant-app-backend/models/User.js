
module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('User',
        {
            username: {
                type: DataTypes.STRING(200),
                unique: true
            },
            password: { type: DataTypes.STRING(255) },
            name: { type: DataTypes.STRING(255) }
        },
        {
            tableName: 'user',
            timestamps: false
        }
    );
    return model;
}