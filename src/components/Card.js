import React, { Component } from 'react';
import { DrumButtonsView } from './DrumButtonsView';
import { ControlsView } from './ControlsView';

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            powerOn: true,
            lastPlayedSound: 'Hello, World!',
            volume: 75,
            soundBank: true,
        }
    }

    render() {
        return(
            <div style={{             
                minWidth: '40em',
                minHeight: '20em',
                maxWidth: '40em',                 
                backgroundColor: 'red',  
                alignSelf: 'center', 
                justifySelf: 'center',
                padding: '0px', 
                boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
                display: "flex",
                flexDirection: "row",
            }}>
            <DrumButtonsView />
            <ControlsView 
                powerOn={this.state.powerOn}
                changePower={(powerOn) => this.setState({powerOn})}
                volume={this.state.volume}
                changeVolume={(volume) => this.setState({volume})}
                lastPlayedSound={this.state.lastPlayedSound}
                soundBank={this.state.soundBank}
                changeSoundBank={(soundBank) => this.setState({soundBank})}               
            />
            </div>
        );
    }
}

export { Card };