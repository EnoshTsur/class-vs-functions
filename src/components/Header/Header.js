import React, { Component } from 'react'
import Center from '../Center/Center'

export default class Header extends Component {
    

    render() {
        const { user, } = this.props
        console.log('!!! ', user)

        return (
            <div>
                <Center>

                </Center>
            </div>
        )
    }
}
