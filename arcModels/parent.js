/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('parent', {
		parentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'parent_id'
		},
		parentSmiles: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'parent_smiles'
		}
	}, {
		timestamps: false,
		tableName: 'parent'
	});
};
