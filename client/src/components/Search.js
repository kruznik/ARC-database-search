import React, {Component} from 'react';
import FormErrors from './FormErrors';
import Results from './Results';
import axios from 'axios';

class SearchForm extends Component{
    constructor(props){
        super(props);
        this.state={
            chems:'',
            formErrors:{chems:''},
            formValid:false,
            chemsValid:false,
            loading:false,
            query:false,
            result:[],
            error:[]
        };
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]:event.target.value},
                        ()=>{this.validateField(value)});
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({loading:true, result:[], error:[]});
        const query={chems:this.state.chems.trim().split(',')};

        axios.post('/',query)
            .then(res=>this.setState({result:res.data, loading:false, query:true}))
            .catch(err=>this.setState({error:err, loading:false}))

    }

    validateField(value){
        let fieldValidationErrors = this.state.formErrors;
        let chemsValid=this.state.chemsValid;

        let invalidChems=value.trim().split(',').filter((chem)=>!chem.match(/^([^J][A-Za-z0-9@+\-\[\]\(\)\\=#$]+)$/));

        chemsValid=invalidChems.length===0;
        fieldValidationErrors.chems=chemsValid?'': invalidChems.join(',');

        this.setState({formErrors:fieldValidationErrors,
                        chemsValid:chemsValid},
                        this.validateForm);
    }

    validateForm(){
        this.setState({formValid:this.state.chemsValid});
    }

    render(){
        let result;
        if (this.state.loading){
            result=<p>Loading...</p>
        }else if (!this.state.query){
            result=<p>Enter valid SMILEs and hit submit to search for records</p>
        }else if((this.state.error instanceof Error) && this.state.error.response.status===504 ){
            result=<p>Error, SQL server timedout. Try again in a few minutes.</p>
        }else if((this.state.error instanceof Error) && this.state.error.response.status===400){
            result=<p>Error, invalid smile.</p>
        }else{
            result=<Results SearchResults={this.state.result}/>
        }

        return(
        <div>
            
            <form  onSubmit={(e)=>this.handleSubmit(e)} className='form-group'>
            <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors}/>
            </div>
            <div className="form-group">
                <label htmlFor="search_text_area">Search database by SMILES. Seperate multiple SMILES by comma
                </label>
                <textarea name="chems" className="form-control" id="search_text_area" cols="30" rows="10" value={this.state.chems} onChange={(e)=>this.handleChange(e)}></textarea>
            </div>
            <button type='submit' value="Submit" className='btn btn-primary' disabled={!this.state.formValid}>Find all records</button>
            
            </form>
                {result}
        </div>
        );
    }

}
export default SearchForm;