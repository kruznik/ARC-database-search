const isEmpty =  require('./isEmpty');
const Validator = require('validator');


module.exports = function validateSearchSmiles(data){
    let errors = {};

    let notSmile = data.chems.filter((smile)=>{
        if(!Validator.matches(smile,/^([^J][A-Za-z0-9@+\-\[\]\(\)\\=#$]+)$/)){
            return(smile);
        }
    });

    if (!isEmpty(notSmile)){
        console.log(notSmile)
        errors.notSmile=[...notSmile];
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}