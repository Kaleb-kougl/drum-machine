import React from 'react';

const SoundView = (props) => {
    
    return (
        <div style={{
            height: '40px',
            width: '150px',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'rgb( 67, 240, 61 )',
            borderWidth: '1px',
            borderStyle: 'solid',
            color: 'rgb( 67, 240, 61 )'
            }}
            id="display"
        >
            {props.lastPlayedSound}
        </div>
    );
}

export { SoundView }; 