/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('species', {
		speciesId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'species_id'
		},
		speciesName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'species_name'
		},
		speciesLatinName: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'species_latin_name'
		}
	}, {
		timestamps: false,
		tableName: 'species'
	});
};
