/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('names', {
		nameId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'NAME_ID'
		},
		canonicalId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'canonical',
				key: 'canonical_id'
			},
			field: 'canonical_id'
		},
		nameDesc: {
			type: DataTypes.STRING(256),
			allowNull: true,
			field: 'NAME_DESC'
		},
		nameString: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'NAME_string'
		}
	}, {
		timestamps: false,
		tableName: 'names'
	});
};
