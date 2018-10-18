const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const config = require('./config/keys');


const sequelize = new Sequelize(config.user, config.db, config.password,{
    host:'toxkin.xyz',
    dialect:'mysql',
    pool:{
        max:10,
        min:0,
        acquire:20000,
        idle:20000
    },
    operatorsAliases:{$in:Op.in}
});

const Canonical = sequelize.import(__dirname+'/arcModels/canonical');
const Cas = sequelize.import(__dirname+'/arcModels/CAS');
const Chemical_properties= sequelize.import(__dirname+'/arcModels/chemical_properties');
const Chiral_no= sequelize.import(__dirname+'/arcModels/chiral_no');
const Curators= sequelize.import(__dirname+'/arcModels/curators');
const Data_points = sequelize.import(__dirname+'/arcModels/data_points');
//const Data_source = sequelize.import(__dirname+'/arcModels/data_source');
const Data_type= sequelize.import(__dirname+'/arcModels/data_type');
const Exp_conditions= sequelize.import(__dirname+'/arcModels/exp_conditions');
const Exp_observations= sequelize.import(__dirname+'/arcModels/exp_observations');
const Exp_subjects= sequelize.import(__dirname+'/arcModels/exp_subjects');
const Inchikeys= sequelize.import(__dirname+'/arcModels/inchikeys');
const Names= sequelize.import(__dirname+'/arcModels/names');
//const Parent= sequelize.import(__dirname+'/arcModels/parent');
//const Pub_status= sequelize.import(__dirname+'/arcModels/pub_status');
const Pubchem= sequelize.import(__dirname+'/arcModels/pubchem');
const Publication_content= sequelize.import(__dirname+'/arcModels/publication_content');
const Publication_type= sequelize.import(__dirname+'/arcModels/publication_type');
const Publications = sequelize.import(__dirname+'/arcModels/publications');
const Records= sequelize.import(__dirname+'/arcModels/records');
const Species = sequelize.import(__dirname+'/arcModels/species');
//const Status= sequelize.import(__dirname+'/arcModels/status');
const Tissue_type= sequelize.import(__dirname+'/arcModels/tissue_type');

//1:M relationship with canoncial
Canonical.hasMany(Records, {as:'CanonicalsRecords',foreignKey:'canonical_id'});
Canonical.hasMany(Pubchem, {foreignKey:'canonical_id'});
Canonical.hasMany(Cas, {foreignKey:'canonical_id'});
Canonical.hasMany(Inchikeys, {foreignKey:'CANONICAL_ID'});
Canonical.hasMany(Names, {foreignKey:'canonical_id'});

Records.belongsTo(Canonical, {as:'CanonicalRecords',foreignKey:'canonical_id'});
Pubchem.belongsTo(Canonical, {foreignKey:'canonical_id'});
Cas.belongsTo(Canonical, {foreignKey: 'canonical_id'});
Inchikeys.belongsTo(Canonical, {foreignKey:'CANONICAL_ID'});
Names.belongsTo(Canonical, {foreignKey:'canonical_id'});



//1:M relationship with records
Records.hasMany(Exp_subjects, {foreignKey:'record_id'});
Records.hasMany(Data_points, {as: 'recordDataPoint',foreignKey:'record_id'});
Records.hasMany(Exp_observations, {foreignKey:'record_id'});
Records.hasMany(Exp_conditions, {foreignKey:'record_id'});

Exp_subjects.belongsTo(Records, {foreignKey:'record_id'});
Data_points.belongsTo(Records, {as:'DataPointrecord',foreignKey:'record_id'});
Exp_conditions.belongsTo(Records, {foreignKey:'record_id'});
Exp_observations.belongsTo(Records, {foreignKey:'record_id'});



//M:M relationship through records
/*
Canonical.belongsToMany(Species, {through:Records, foreignKey:'canonical_id'});
Species.belongsToMany(Canonical, {through:Records, foreignKey:'species_id'});

Canonical.belongsToMany(Data_type, {through:Records, foreignKey:'canonical_id'});
Data_type.belongsToMany(Canonical, {through:Records, foreignKey:'data_type_id'});

Canonical.belongsToMany(Curators, {through:Records, foreignKey:'canonical_id'});
Curators.belongsToMany(Canonical, {through:Records, foreignKey:'curator_id'});

Canonical.belongsToMany(Publications, {through:Records, foreignKey:'canonical_id'});
Publications.belongsToMany(Canonical, {through:Records, foreignKey:'publication_id'});



Species.belongsToMany(Data_type, {through:Records, foreignKey:'species_id'});
Data_type.belongsToMany(Species, {through:Records, foreignKey:'data_type_id'});

Species.belongsToMany(Curators, {through:Records, foreignKey:'species_id'});
Curators.belongsToMany(Species, {through:Records, foreignKey:'curator_id'});

Species.belongsToMany(Publications, {through:Records, foreignKey:'species_id'});
Publications.belongsToMany(Species, {through:Records, foreignKey:'publication_id'});


Data_type.belongsToMany(Curators, {through:Records, foreignKey:'data_type_id'});
Curators.belongsToMany(Data_type, {through:Records, foreignKey:'curator_id'});

Data_type.belongsToMany(Publications, {through:Records, foreignKey:'data_type_id'});
Publications.belongsToMany(Data_type, {through:Records, foreignKey:'publication_id'});


Curators.belongsToMany(Publications, {through:Records, foreignKey:'curator_id'});
Publications.belongsToMany(Curators, {through:Records, foreignKey:'publication_id'});


//M:M relationship tissue_type to records through data_points
Tissue_type.belongsToMany(Records, {through:Data_points, foreignKey:'record_id'});
Records.belongsToMany(Tissue_type, {through:Data_points, foreignKey:'tissue_id'});
*/
//1:M relationship species
Species.hasMany(Records, {foreignKey:'species_id'});
Species.hasMany(Publication_content, {foreignKey:'species_id'});
Records.belongsTo(Species, {foreignKey:'species_id'});
Publication_content.belongsTo(Species, {foreignKey:'species_id'});

//1:M relationship data_type
Data_type.hasMany(Records, {foreignKey:'data_type_id'});
Data_type.hasMany(Publication_content, {foreignKey:'data_type_id'});
Records.belongsTo(Data_type, {foreignKey:'data_type_id'});
Publication_content.belongsTo(Data_type, {foreignKey:'data_type_id'});

//1:M relationship curators
Curators.hasMany(Records, {foreignKey:'curator_id'});
Records.belongsTo(Curators, {foreignKey:'curator_id'});

//1:M relationship tissue_type
Tissue_type.hasMany(Data_points, {foreignKey:'tissue_id'});
Data_points.belongsTo(Tissue_type, {foreignKey:'tissue_id'});

//1:M relationship publication_type
Publication_type.hasMany(Publications, {foreignKey:'publication_type', sourceKey:'pub_type_id'});
Publications.belongsTo(Publication_type, {as: 'TypeOfPublication',foreignKey:'publication_type'});

//1:M relationship publications
Publications.hasOne(Records, {foreignKey:'publication_id'});
Records.belongsTo(Publications, {foreignKey:'publication_id'});

sequelize.sync({force:false}).then(()=>console.log('models created'))
                                .catch(err=>console.log(err));

module.exports={
    Canonical,
    Cas,
    Curators,
    Data_points,
    Data_type,
    Exp_conditions,
    Exp_observations,
    Exp_subjects,
    Inchikeys,
    Names,
    Pubchem,
    Publication_content,
    Publication_type,
    Publications,
    Records,
    Species,
    Tissue_type
}
