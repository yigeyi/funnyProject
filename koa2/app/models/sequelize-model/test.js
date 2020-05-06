/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('test', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nick_name: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
	}, {
		tableName: 'test',
		timestamps: false
	});
};
