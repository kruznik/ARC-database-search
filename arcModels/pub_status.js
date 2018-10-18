/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pubStatus', {
		publicationStatusId: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			primaryKey: true,
			field: 'publication_status_id'
		},
		pubStatus: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'pub_status'
		},
		pubStatusDesc: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'pub_status_desc'
		}
	}, {
		timestamps: false,
		tableName: 'pub_status'
	});
};
