/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dataType', {
		dataTypeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'data_type_id'
		},
		dataTypeName: {
			type: DataTypes.STRING(256),
			allowNull: false,
			field: 'data_type_name'
		},
		dataTypeDesc: {
			type: DataTypes.STRING(256),
			allowNull: true,
			field: 'data_type_desc'
		}
	}, {
		timestamps: false,
		tableName: 'data_type'
	});
};
