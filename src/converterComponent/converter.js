import React from 'react';

var data = require('./lookupTable.json');

class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state = { from: '', fromType:'1inch' };
        this.converted = 0;
    }
    
    handleChange = event => {
        this.setState({ from: event.target.value});
    };
    
    handleDropdownChange = event =>{
        this.setState({fromType:event.target.value});
    }
    
    convert(from, fromType ){
        var answer = [];
        for (var i=0; i<=data[fromType].length; i++ ){
            answer[i] = from*data[fromType][i];
        }
        
        return answer;
    }
    
    render(){

        this.converted = this.convert(this.state.from, this.state.fromType);
        return(
            <div className="converter">
                <form>
                    <select name="to" id="to" value={this.state.fromType} onChange={this.handleDropdownChange}>
                        <option value="1inch">1 Inch</option>
                        <option value="micro43">Micro 4/3</option>
                        <option value="APSCCanon">APS-C Canon</option>
                        <option value="APSCNikon">APS-C Nikon</option>
                        <option value="APSH">APS-H</option>
                        <option value="FullFrame">Full Frame</option>
                        <option value="MediumFormatCrop">Medium Format Crop</option>
                        <option value="MediumFormatFull">Medium Format Full</option>
                    </select>
                <label htmlFor="from">From</label>
                <input
                type="text"
                name="from"
                value={this.state.from}
                onChange={this.handleChange}
                />
                </form>
                <ul>
                    <li>1-inch: {this.converted[0]} mm</li>
                    <li>Micro 4/3: {this.converted[1]} mm</li>
                    <li>APS-C (Canon): {this.converted[2]} mm</li>
                    <li>APS-C (Nikon): {this.converted[3]} mm</li>
                    <li>APS-H: {this.converted[4]} mm</li>
                    <li>Full Frame: {this.converted[5]} mm</li>
                    <li>Medium Format (Crop): {this.converted[6]} mm</li>
                    <li>Medium Format (Full): {this.converted[7]} mm</li>
                    <li></li>
                </ul>
            </div>
        )
    }
        
    
}

export default Converter;