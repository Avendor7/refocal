import React, {useState } from 'react';

const jsondata = require('./lookupTable.json');

const NewConverter = () => {

    let [data, setData] = useState(jsondata);

    const convert = () => {
        
        let tempdata = data.map((index)=>(
            index.values = 4* parseFloat(index.values)
        ));

        setData(tempdata);
        console.log(data);
       
    };
    
    return ( 
        <div className="converter">
            
            {data.map((index)=>(
                <p>{index.displayName}</p>
            ))}
            
            <button onClick={convert}>button</button>
        </div> 
    );
}
 
export default NewConverter;