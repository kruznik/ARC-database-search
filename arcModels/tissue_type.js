/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tissueType', {
		tissueTypeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'tissue_type_id'
		},
		tissueTypeName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'tissue_type_name'
		},
		tissueTypeDesc: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'tissue_type_desc'
		}
	}, {
		timestamps: false,
		tableName: 'tissue_type'
	});
};
