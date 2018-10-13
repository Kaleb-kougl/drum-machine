import React from 'react';

const ToggleSwitch = (props) => {
    let side = 'flex-start';
    
    if (!props.variableToToggle) {
        side = 'flex-end';
    }

    return(
        <div style={{textAlign: 'center', margin: '5px'}}>
            {props.display}
            <div style={{
                width: '60px',
                height: '36px',
                backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: side,
                paddingLeft: '3px',
                paddingRight: '3px',            
                }}
                onClick={() => props.changeState(!props.variableToToggle)}>

                <div style={{
                    width: '40%',
                    height: '80%',
                    backgroundColor: 'orange',
                }} /> 
            </div>
        </div>
    );

}

export { ToggleSwitch };