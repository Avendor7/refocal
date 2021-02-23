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
           <form>
                <select name="to" id="to" >
                    {data.map((item)=>(
                        <option key={item.name} value={item.name}>{item.displayName}</option>
                    ))}
                </select>
                <label htmlFor="from">From</label>
                <input type="text" name="from" value="blah" />
            </form>
            <ul>
                {data.map((item)=>(
                    <li key={item.name} >{item.displayName}: </li>
                ))}
            </ul>
        </div> 
    );
}
 
export default NewConverter;