/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('canonical', {
		canonicalId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'canonical_id'
		},
		canonicalSmiles: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'canonical_smiles'
		},
		canonicalDesalted: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'canonical_desalted'
		}
	}, {
		timestamps: false,
		tableName: 'canonical'
	});
};
