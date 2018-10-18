import React from 'react';
import {CSVLink} from 'react-csv';

function flatten(data) {
    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
             for(var i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop + "[" + i + "]");
            if (l === 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
}

const RecordLinks = ({chemical})=>{
    let CSVData=[];
    chemical.CanonicalsRecords.forEach(record => {
        CSVData.push(flatten(record));
    });


    return(
    <CSVLink data={CSVData} 
            filename={'chemical-record.csv'} 
            className="list-group-item list-group-item-action"
            target="_blank">
        {chemical.canonicalSmiles}
        <span className="badge badge-primary badge-pill">{chemical.CanonicalsRecords.length}</span>
    </CSVLink>
    );
}
    
   
export default RecordLinks