import React from 'react';
import { DrumButton } from './DrumButton';

const DrumButtonsView = () => {
 
  return (
    <div style={{ 
        flex: 1,
        borderColor: 'black',
        borderWidth: '1px',
        borderStyle: 'solid',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        padding: 0,
    }}>
    <DrumButton />
    <DrumButton />
    <DrumButton />
    <DrumButton />
    <DrumButton />
    <DrumButton />
    <DrumButton />
    <DrumButton />
    <DrumButton />
    </div>
  ); 

};

export { DrumButtonsView };