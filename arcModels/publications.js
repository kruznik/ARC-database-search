/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('publications', {
		publicationId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'publication_id'
		},
		pubmedId: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'pubmed_id'
		},
		publicationStatus: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			field: 'publication_status'
		},
		publicationType: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			references: {
				model: 'publication_type',
				key: 'pub_type_id'
			},
			field: 'publication_type'
		},
		dataSource: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'data_source'
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'title'
		},
		authors: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'authors'
		},
		journal: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'journal'
		},
		year: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'year'
		},
		volume: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'volume'
		},
		issue: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'issue'
		},
		firstPage: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'first_page'
		},
		lastPage: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'last_page'
		},
		doi: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'doi'
		},
		abstract: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'abstract'
		},
		publicationNotes: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'publication notes'
		},
		chemblDocId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_doc_id'
		}
	}, {
		timestamps: false,
		tableName: 'publications'
	});
};
