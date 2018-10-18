/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('curators', {
		curatorId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'curator_id'
		},
		curatorName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'curator_name'
		},
		curatorAgency: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'curator_agency'
		}
	}, {
		timestamps: false,
		tableName: 'curators'
	});
};
