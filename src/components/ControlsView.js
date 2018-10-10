import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import { SoundView } from './SoundView';
import { VolumeSlider } from './VolumeSlider';

const ControlsView = (props) => {
 
  return (
    <div style={{ 
        flex: 1,
        borderColor: 'black',
        borderWidth: '1px',
        borderStyle: 'solid',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between', 
    }}>
    <ToggleSwitch 
      variableToToggle={props.powerOn}
      changeState={props.changePower}
      display="Power"
    />
    <SoundView
      lastPlayedSound={props.lastPlayedSound} 
    />
    <VolumeSlider
      volume={props.volume}
      changeVolume={props.changeVolume} 
    />
    <ToggleSwitch
      variableToToggle={props.soundBank}
      changeState={props.changeSoundBank}
      display="Bank" 
    />
    </div>
  ); 

};

export { ControlsView };