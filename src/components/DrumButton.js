import React, { Component } from 'react';

class DrumButton extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidUpdate() {
        let audio = document.getElementById(this.props.attributes.id);
        audio.volume = (this.props.volume) / 100.0;
    }

    componentDidMount() {
        let audio = document.getElementById(this.props.attributes.id);
        audio.volume = (this.props.volume) / 100.0;
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleClick() {
        if (this.props.powerOn) {
            let audio = document.getElementById(this.props.attributes.id);
            audio.pause();
            this.props.changeLastPlayedSound(this.props.attributes.name);
            audio.currentTime = 0;
            audio.play();
        }
    }

    handleKeyDown = (event) => {
        if ( event.keyCode === this.props.attributes.keyboardKey) {
            this.handleClick();
        }
    }

    render() { 

        return(
            <div
                id={this.props.attributes.name} 
                className="button"
                style={ styles }
                onClick={() => {
                    this.handleClick();
                }}
                onKeyDown={() => {console.log('key pressed!')}}
            >
            <audio id={this.props.attributes.id} src={this.props.attributes.url} volume={0.1}/>
            {this.props.attributes.id}
            </div>
        )
    }
};

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