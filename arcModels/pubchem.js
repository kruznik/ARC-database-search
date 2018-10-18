/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pubchem', {
		pubchemId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'pubchem_id'
		},
		pubchemCid: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'pubchem_cid'
		},
		canonicalId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'canonical',
				key: 'canonical_id'
			},
			field: 'canonical_id'
		}
	}, {
		timestamps: false,
		tableName: 'pubchem'
	});
};
