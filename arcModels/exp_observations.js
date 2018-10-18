/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('expObservations', {
		eoId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'eo_id'
		},
		recordId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
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
		eoDesc: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'eo_desc'
		},
		eoNumericalValue: {
			type: "DOUBLE",
			allowNull: true,
			field: 'eo_numerical_value'
		},
		eoTextValue: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'eo_text_value'
		},
		eoReportedUnit: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'eo_reported unit'
		},
		eoNotes: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'eo_notes'
		}
	}, {
		timestamps: false,
		tableName: 'exp_observations'
	});
};
