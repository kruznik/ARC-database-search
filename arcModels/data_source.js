/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dataSource', {
		dataSourceId: {
			type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
			allowNull: false,
			primaryKey: true,
			field: 'data_source_id'
		},
		source: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'source'
		},
		srcDescription: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'src_description'
		},
		sourceNotes: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'source_notes'
		}
	}, {
		timestamps: false,
		tableName: 'data_source'
	});
};
