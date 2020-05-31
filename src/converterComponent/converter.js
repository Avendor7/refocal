import React from 'react';

class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state = { to35mm: '' };
        this.converted = 0;
    }
    
    handleChange = event => {
        this.setState({ to35mm: event.target.value });
    };
    
    convert(apsc){
        var answer = apsc*1.53;
        return answer
    }

    render(){
        this.converted = this.convert(this.state.to35mm);
        return(
            <div className="converter">
                <form>
                <label htmlFor="to35mm">To 35mm</label>
                <input
                type="text"
                name="to35mm"
                value={this.state.to35mm}
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