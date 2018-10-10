import React from 'react';

const DrumButton = () => {
    
    return(
        <div 
            className="button"
            style={ styles }
            onClick={() => {
                console.log('click');
            }}
        >
            Drum!
        </div>
    );
}

const styles = {
    borderColor: 'black',
    borderWidth: '1px',
    borderStyle: 'solid',
    width: '25%',
    height: '25%',
    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.75)',
    backgroundColor: 'orange',
    borderRadius: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export { DrumButton };