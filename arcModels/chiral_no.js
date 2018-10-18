/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('chiralNo', {
		chiralNoId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'chiralNo_id'
		},
		chiralNoSmiles: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'chiralNo_SMILES'
		},
		canonicalId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'canonical_id'
		}
	}, {
		timestamps: false,
		tableName: 'chiral_no'
	});
};
