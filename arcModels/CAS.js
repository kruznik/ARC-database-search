/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cas', {
		casId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'CAS_ID'
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
		casNo: {
			type: DataTypes.STRING(15),
			allowNull: true,
			field: 'CAS_NO'
		}
	}, {
		timestamps: false,
		tableName: 'CAS'
	});
};
