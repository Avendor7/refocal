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
                <h1>{this.converted}</h1>
            </div>
        )
    }
        
    
}

export default Converter;