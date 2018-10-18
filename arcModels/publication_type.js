/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('publicationType', {
		pubTypeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'pub_type_id'
		},
		pubTypeDescription: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'pub_type_description'
		},
		pubTypeNotes: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'pub_type_notes'
		}
	}, {
		timestamps: false,
		tableName: 'publication_type'
	});
};
