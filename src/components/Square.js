import React, { Component } from 'react'
import '../App.css';

export default class Square extends Component {
    render() {
        return (
            <button onClick={()=>this.props.onClick()} className="square">
                {this.props.value}
            </button>
        )
    }
}
