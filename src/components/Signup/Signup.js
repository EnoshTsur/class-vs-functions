import React, { Component } from 'react'

export default class Signup extends Component {

    state = {
        name: '',
        age: '',
    }

    render() {
        return (
            <div>
                <input 
                    type="text"     
                    placeholder="Name" 
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                />
                
                <input 
                    type="number" 
                    placeholder="Age" 
                    min="0" 
                    max="120" 
                    value={this.state.age}
                    onChange={e => this.setState({ age: e.target.value })} 
                />

                <button>Signup</button>
            </div>
        )
    }
}
