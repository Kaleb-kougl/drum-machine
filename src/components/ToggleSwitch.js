import React from 'react';

const ToggleSwitch = (props) => {
    let side = 'flex-start';
    
    if (!props.variableToToggle) {
        side = 'flex-end';
    }

    return(
        <div style={{textAlign: 'center', margin: '5px', color: 'rgb( 67, 240, 61 )',}}>
            {props.display}
            <div style={{
                width: '60px',
                height: '36px',
                backgroundColor: 'black',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb( 67, 240, 61 )',
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
                    backgroundColor: 'rgb( 67, 240, 61 )',
                }} /> 
            </div>
        </div>
    );

}

export { ToggleSwitch };