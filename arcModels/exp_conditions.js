/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('expConditions', {
		ecId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ec_id'
		},
		chemblAssayId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_assay_id'
		},
		chemblParamId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'chembl_param_id'
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
		ecDesc: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'ec_desc'
		},
		ecRelation: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'ec_relation'
		},
		ecNumericalValue: {
			type: "DOUBLE",
			allowNull: true,
			field: 'ec_numerical_value'
		},
		ecTextValue: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'ec_text_value'
		},
		ecReportedUnit: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'ec_reported unit'
		},
		ecStandardType: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'ec_standard_type'
		},
		ecStandardRelation: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'ec_standard_relation'
		},
		ecStandardValue: {
			type: "DOUBLE",
			allowNull: true,
			field: 'ec_standard_value'
		},
		ecStandardTextValue: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'ec_standard_text_value'
		},
		ecStandardUnit: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'ec_standard_unit'
		},
		ecNotes: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'ec_notes'
		}
	}, {
		timestamps: false,
		tableName: 'exp_conditions'
	});
};
