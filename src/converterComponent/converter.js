import React from 'react';

var data = require('./lookupTable.json');

class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state = { from: '' };
        this.converted = 0;
    }
    
    handleChange = event => {
        this.setState({ from: event.target.value });
    };
    
    convert(apsc){
        var answer = apsc*1.53;
        return answer
    }
    
    render(){
        this.converted = this.convert(this.state.from);
        
        return(
            <div className="converter">
                <form>
                <label htmlFor="from">From</label>
                <input
                type="text"
                name="from"
                value={this.state.from}
                onChange={this.handleChange}
                />
            </form>
            <ul>
                <li>Full Frame: {this.converted} mm</li>
                <li>1-inch: {this.converted} mm</li>
                <li>Micro 4/3: {this.converted} mm</li>
                <li>APS-C (Canon): {this.converted} mm</li>
                <li>APS-C (Nikon): {this.converted} mm</li>
                <li>APS-H: {this.converted} mm</li>
                <li>Medium Format (Crop): {this.converted} mm</li>
                <li>Medium Format (Full): {this.converted} mm</li>
                <li></li>
            </ul>
            </div>
        )
    }
        
    
}

export default Converter;