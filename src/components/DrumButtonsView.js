import React from 'react';
import { DrumButton } from './DrumButton';

const DrumButtonsView = (props) => {
  if (props.soundBank) {
    var bank = 0;
  } else {
    bank = 1; 
  }
  let buttons = [];
  for (let i = 0; i < 9; i++) {
    buttons.push( <DrumButton 
      key={i}
      attributes={props.soundsArray[bank][i]}
      volume={props.volume}
      powerOn={props.powerOn}
      changeLastPlayedSound={props.changeLastPlayedSound} />);
  }

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
    {buttons}
    </div>
  ); 
};

export { DrumButtonsView };