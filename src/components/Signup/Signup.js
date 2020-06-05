import React, { Component } from 'react'

export default class Signup extends Component {

    state = {
        name: '',
        age: '',
    }

    isValidInputs = () =>  this.state.name !== '' && this.state.age !== ''

    render() {

        const { setUser, } = this.props

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

                <button
                    disabled={!this.isValidInputs()}
                    onClick={() => setUser({ name:  this.state.name, age: this.state.age,  })}
                >
                    Signup
                </button>
            </div>
        )
    }
}
