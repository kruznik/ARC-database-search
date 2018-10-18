/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('inchikeys', {
		inchikeyId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'INCHIKEY_ID'
		},
		canonicalId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'canonical',
				key: 'canonical_id'
			},
			field: 'CANONICAL_ID'
		},
		inchi: {
			type: DataTypes.STRING(256),
			allowNull: true,
			field: 'INCHI'
		},
		inchikey: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'INCHIKEY'
		},
		molregno: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'molregno'
		}
	}, {
		timestamps: false,
		tableName: 'inchikeys'
	});
};
