import React, {Component} from 'react';

class Slider extends Component {

    state = {
        title: "Slogan Bwat ici pour le slider"
    }

    render() {
        return (
            <div className="slider">
                <div className="path-slider">
                    <h1>{ this.state.title }</h1>
                </div>
            </div>
        )
    }
}

export default Slider;