/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('expSubjects', {
		subjectId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'subject_id'
		},
		speciesId: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			field: 'species_id'
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
		dataTypeId: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			field: 'data_type_id'
		},
		reportedAge: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'reported_age'
		},
		ageStage: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'age_stage'
		},
		strain: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'strain'
		},
		strainDescription: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'strain_description'
		},
		sex: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'sex'
		},
		bodyWeightReported: {
			type: "DOUBLE",
			allowNull: true,
			field: 'body_weight_reported'
		},
		bodyWeightUsedKg: {
			type: "DOUBLE",
			allowNull: true,
			field: 'body_weight_used_kg'
		},
		bodyWeightComments: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'body_weight_comments'
		}
	}, {
		timestamps: false,
		tableName: 'exp_subjects'
	});
};
