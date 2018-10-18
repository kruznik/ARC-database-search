/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('records', {
		recordId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'record_id'
		},
		chemblAssayId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_assay_id'
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
		canonicalId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'canonical',
				key: 'canonical_id'
			},
			field: 'canonical_id'
		},
		chiralNoId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'chiral_no',
				key: 'chiralNo_id'
			},
			field: 'chiral_no_id'
		},
		parentId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'chiral_no',
				key: 'chiralNo_id'
			},
			field: 'parent_id'
		},
		chemblMolregno: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_molregno'
		},
		compoundName: {
			type: DataTypes.STRING(750),
			allowNull: true,
			field: 'compound_name'
		},
		chemblRecordId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_record_id'
		},
		chemblCompoundKey: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'chembl_compound_key'
		},
		status: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'status'
		},
		recordDesc: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'record_desc'
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
		chemblDocId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_doc_id'
		},
		speciesId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'species',
				key: 'species_id'
			},
			field: 'species_id'
		},
		assayOrganism: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'assay_organism'
		},
		speciesStrain: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'species_strain'
		},
		tissueTypeId: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			field: 'tissue_type_id'
		},
		chemblTissue: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'chembl_tissue'
		},
		arcConfidenceScore: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'ARC_confidence score'
		},
		arcConfidenceLevel: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'ARC_confidence_level'
		},
		chemblConfidenceScore: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'chembl_confidence_score'
		},
		curatorId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curators',
				key: 'curator_id'
			},
			field: 'curator_id'
		},
		chemblCuratedBy: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'chembl_curated_by'
		},
		dataSourceId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'data_source_id'
		},
		recordNotes: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'record_notes'
		}
	}, {
		timestamps: false,
		tableName: 'records'
	});
};
