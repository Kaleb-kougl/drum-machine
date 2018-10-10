import React, { Component } from 'react';

class VolumeSlider extends Component{
    constructor(props) {
        super(props);
        this.storeValue = this.storeValue.bind(this);
    }

    storeValue(event) {
        this.props.changeVolume(event.target.value);
    };
    
    render() {
        return (
            <div className="slideContainer" style={{textAlign: 'center',}}>
                <input type="range" min="1" max="100" className="slider" id="myRange"
                    value={this.props.volume}
                    onChange={ this.storeValue }
                />
                <p style={{marginTop: 0,}}>Volume: {this.props.volume}</p>
            </div>
        );
    }
}

export { VolumeSlider };
