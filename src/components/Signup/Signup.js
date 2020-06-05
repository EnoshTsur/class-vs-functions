import React, { Component } from 'react'

export default class Signup extends Component {

    
    render() {
        return (
            <div>
                <input type="text"  placeholder="Name"/>
                <input type="number" placeholder="Age" min="0" max="120" />
                <button>Signup</button>
            </div>
        )
    }
}
