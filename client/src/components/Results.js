import React from 'react';
import RecordLinks from './RecordLinks';


const Results = ({SearchResults})=>

    <div className='card results_card'>
        <div className='card-body'>
            <h5 className='card-title'>Search Results</h5>
                {!SearchResults.length?<p>No records found</p>: SearchResults.map((chem,i)=><RecordLinks key={i} chemical={chem}/>)}
        </div>
    </div>

export default Results;