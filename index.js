const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const validateSearchSmiles = require('./validation/searchValidation')

const {
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
} = require('./sequelize');

const app = express();
app.use(bodyParser.json());





app.post('/', (req,res)=>{
    console.log(req.body.chems);
    const { errors , isValid }=validateSearchSmiles(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    Canonical.findAll({where:{canonical_smiles:{
        $in: req.body.chems
        }}, 
        include:[{model:Records, 
                as: 'CanonicalsRecords', separate:true,
                include:[{model:Publications,include:[{model:Publication_type, as:'TypeOfPublication'}]},
                        {model:Data_type},
                        {model:Curators},
                        {model:Data_points, as: 'recordDataPoint', separate:true, include:[{model:Tissue_type}]},
                        {model:Exp_conditions, separate:true},
                        {model:Exp_observations, separate:true},
                        {model:Exp_subjects, separate:true}]
        }]
        }).then(canonical=>res.json(canonical))
        .catch(err=>res.status(504).json(err));


        

        
            
        
    

    
    
        /*Canonical.findOne({where:{canonical_smiles:chem}, 
                        include:[{model:Records, 
                                as: 'CanonicalsRecords', separate:true,
                                include:[{model:Publications,include:[{model:Publication_type, as:'TypeOfPublication'}]},
                                        {model:Data_type},
                                        {model:Curators},
                                        {model:Data_points, as: 'recordDataPoint', separate:true, include:[{model:Tissue_type}]},
                                        {model:Exp_conditions, separate:true},
                                        {model:Exp_observations, separate:true},
                                        {model:Exp_subjects, separate:true}]
                        }]
        })  */     
   


    /*
    Canonical.findOne({where:{canonical_smiles:'CN1CCC[C@H]1c2cccnc2'}, 
                        include:[{model:Records, 
                                as: 'CanonicalsRecords', separate:true,
                                include:[{model:Publications,include:[{model:Publication_type, as:'TypeOfPublication'}]},
                                        {model:Data_type},
                                        {model:Curators},
                                        {model:Data_points, as: 'recordDataPoint', separate:true, include:[{model:Tissue_type}]},
                                        {model:Exp_conditions, separate:true},
                                        {model:Exp_observations, separate:true},
                                        {model:Exp_subjects, separate:true}]
                        }]
        })       
        .then(canonical=>res.json(canonical));

        Canonical.findOne({where:{canonical_smiles:'CN1CCC[C@H]1c2cccnc2'}, 
        include:[{model:Species}]
        })
        .then(canonical=>res.json(canonical));*/
});

if (process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));

    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    });
}

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`app listening on port ${port}`));