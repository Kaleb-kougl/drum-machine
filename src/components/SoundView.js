import React from 'react';

const SoundView = (props) => {
    
    return (
        <div style={{
            height: '40px',
            width: '150px',
            backgroundColor: 'gray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {props.lastPlayedSound}
        </div>
    );
}

export { SoundView }; 