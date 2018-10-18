/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('publicationContent', {
		publicationContentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'publication_content_id'
		},
		publicationId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'publications',
				key: 'publication_id'
			},
			field: 'publication_id'
		},
		dataTypeId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'data_type',
				key: 'data_type_id'
			},
			field: 'data_type_id'
		},
		speciesId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'species',
				key: 'species_id'
			},
			field: 'species_id'
		}
	}, {
		timestamps: false,
		tableName: 'publication_content'
	});
};
