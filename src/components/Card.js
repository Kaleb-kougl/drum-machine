import React, { Component } from 'react';
import { DrumButtonsView } from './DrumButtonsView';
import { ControlsView } from './ControlsView';

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            powerOn: true,
            lastPlayedSound: '',
            volume: 50,
            soundBank: true,
            soundsArray: [[
                {
                    id:'Q',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
                    keyboardKey: 81,
                    name: 'Heater 1',
                },
                {
                    id:'W',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
                    keyboardKey: 87,
                    name: 'Heater 2',
                },
                {
                    id:'E',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
                    keyboardKey: 69,
                    name: 'Heater 3',
                },
                {
                    id:'A',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
                    keyboardKey: 65,
                    name: 'Heater 4',
                },
                {
                    id:'S',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
                    keyboardKey: 83,
                    name: 'Heater 5',
                },
                {
                    id:'D',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
                    keyboardKey: 68,
                    name: 'High Hat',
                },
                {
                    id:'Z',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
                    keyboardKey: 90,
                    name: 'Kick/High Hat',
                },
                {
                    id:'X',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
                    keyboardKey: 88,
                    name: 'Kick',
                },
                {
                    id:'V',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
                    keyboardKey: 67,
                    name: 'Closed HH',
                },
            ], [
                {
                    id:'Q',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
                    keyboardKey: 81,
                    name: 'Chord 1',
                },
                {
                    id:'W',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
                    keyboardKey: 87,
                    name: 'Chord 2',
                },
                {
                    id:'E',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
                    keyboardKey: 69,
                    name: 'Chord 3',
                },
                {
                    id:'A',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
                    keyboardKey: 65,
                    name: 'Shaker',
                },
                {
                    id:'S',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
                    keyboardKey: 83,
                    name: 'Open HH',
                },
                {
                    id:'D',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
                    keyboardKey: 68,
                    name: 'Closed HH',
                },
                {
                    id:'Z',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
                    keyboardKey: 90,
                    name: 'Punchy Kick',
                },
                {
                    id:'X',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
                    keyboardKey: 88,
                    name: 'Side Stick',
                },
                {
                    id:'V',
                    url:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
                    keyboardKey: 67,
                    name: 'Snare',
                },
            ]
            ]
        }
    }

    componentDidUpdate(preProps, prevState) {
        if (prevState !== this.state) {
            if (this.state.powerOn !== prevState.powerOn) {
                this.setState({lastPlayedSound: ''})
            }
        }
    }
    
    render() {
        return(
            <div style={{             
                minWidth: '40em',
                minHeight: '20em',
                maxWidth: '40em',                 
                backgroundColor: 'black',  
                alignSelf: 'center', 
                justifySelf: 'center',
                padding: '0px', 
                boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
                display: "flex",
                flexDirection: "row",
                borderColor: 'rgb( 67, 240, 61 )',
                borderWidth: '5px',
                borderStyle: 'solid'
            }}>
            <DrumButtonsView 
                soundsArray={this.state.soundsArray}
                volume={this.state.volume}
                powerOn={this.state.powerOn}
                soundBank={this.state.soundBank}
                changeLastPlayedSound={(lastPlayedSound) => this.setState({lastPlayedSound})}
            />
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