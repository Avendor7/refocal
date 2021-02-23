import React, {useState } from 'react';

const jsondata = require('./lookupTable.json');

//use this as the object that gets constantly updated based on the dropdown and data from lookup
const convertData = {};

const NewConverter = () => {

    let [data, setData] = useState(jsondata);
    //let {convertData, setConvertData} = useState();
  
    //basically re-run the conversion and display the results with both onChange events
    const convert = () =>{
        console.log("hello change");


        //TODO grab the data from the input and the dropdown, then grab the conversion array from the state
        //run conversion setting the state for the converted data. Might have weird problems with the map. map multiple objects/arrays?
    }


    return ( 
        <div className="converter">
           <form>
                <select name="to" id="to" onChange={e => convert()}>
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