/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('status', {
		statusId: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true,
			field: 'statusID'
		},
		statusName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'status_name'
		},
		statusDesc: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'status_desc'
		}
	}, {
		timestamps: false,
		tableName: 'status'
	});
};
