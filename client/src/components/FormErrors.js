import React from 'react';

const FormErrors = ({formErrors})=>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName,i)=>{
            if(formErrors[fieldName].length>0){
                return(
                    <p key={i}>Invalid SMILES {formErrors[fieldName].split(',').length===1?'is': 'are'} {formErrors[fieldName]}</p>
                )
            }else{
                return '';
            }
        }
        
        )}

    </div>

export default FormErrors;
