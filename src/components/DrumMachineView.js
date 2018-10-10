import React, { Component } from 'react';
import { Card } from './Card'

class DrumMachineView extends Component {
    render () {
        return (
            <div style={{
                flex: 1,
                backgroundColor: 'rgb(141, 141, 141)',                
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',                
                minHeight: '100%',
                minWidth: '100%',
                position: 'absolute'
            }}>
                <Card /> 
            </div>
        );
    }
}

export { DrumMachineView }; 