/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dataPoints', {
		dataPointId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'data_point_id'
		},
		canonicalId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'canonical_id'
		},
		chiralNoId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chiral_no_id'
		},
		publicationId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'publication_id'
		},
		recordId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'records',
				key: 'record_id'
			},
			field: 'record_id'
		},
		speciesId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'species_id'
		},
		tissueId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'tissue_type',
				key: 'tissue_type_id'
			},
			field: 'tissue_id'
		},
		dataSource: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'data_source'
		},
		status: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'status'
		},
		activitiesDesc: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'activities_desc'
		},
		chemblAssayId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_assay_id'
		},
		chemblActivityId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_activity_id'
		},
		chemblDocId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_doc_id'
		},
		chemblRecordId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_record_id'
		},
		chemblMolregno: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_molregno'
		},
		chemblBaoEndpoint: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'chembl_bao_endpoint'
		},
		reportedDatapoint: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'reported_datapoint'
		},
		reportedRelation: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'reported relation'
		},
		reportedUpperValue: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'reported upper_value'
		},
		reportedValue: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'reported value'
		},
		reportedUnits: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'reported units'
		},
		standardRelation: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'standard_relation'
		},
		standardType: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'standard_type'
		},
		standardUpperValue: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'standard_upper_value'
		},
		standardizedValue: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'standardized_value'
		},
		standardizedUnits: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'standardized_units'
		},
		standardFlag: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'standard_flag'
		},
		activityComment: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'activity_comment'
		},
		dataValidityNote: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'data_validity_note'
		}
	}, {
		timestamps: false,
		tableName: 'data_points'
	});
};
