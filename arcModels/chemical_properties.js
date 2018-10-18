/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('chemicalProperties', {
		cpId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'cp_id'
		},
		chiralNoId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'chiral_no',
				key: 'chiralNo_id'
			},
			field: 'chiralNo_id'
		},
		fullMolformula: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'full_molformula'
		},
		fullMwt: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'full_mwt'
		},
		mwFreebase: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'mw_freebase'
		},
		mwMonoisotopic: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'mw_monoisotopic'
		},
		epiExperimentalLogP: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'epi_experimental_log_p'
		},
		epiEstimatedLogKow: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'epi_estimated_log_kow'
		},
		epiLogKoaEstimate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'epi_log_koa_estimate'
		},
		epiLogKoaExperimental: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'epi_log_koa_experimental'
		},
		epiLogKoaHenrywin: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'epi_log KOA_Henrywin'
		},
		acdLogp: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'acd_logp'
		},
		acdLogd: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'acd_logd'
		}
	}, {
		timestamps: false,
		tableName: 'chemical_properties'
	});
};
