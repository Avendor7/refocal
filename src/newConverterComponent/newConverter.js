import React, {useState } from 'react';

const jsondata = require('./lookupTable.json');

const NewConverter = () => {

    let [data, setData] = useState(jsondata);

    const convert = () => {
        
        let tempdata = data.map((item)=>(
            item.values = 4* parseFloat(item.values)
        ));

        setData(tempdata);
        console.log(data);
       
    };
    
    return ( 
        <div className="converter">
            
            {data.map((item)=>(
                <p key={item.name}>{item.displayName}</p>
            ))}
            
            <button onClick={convert}>button</button>
        </div> 
    );
}
 
export default NewConverter;