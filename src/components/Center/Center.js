import React, { Component } from 'react'

export default class Center extends Component {

    render() {
        return (
            <div style={{
                display: 'inline',
            }}>
                <div style={{
                    textAlign: 'center',
                }}>

                    {this.props.children}
                </div>
            </div>
        )
    }
}
