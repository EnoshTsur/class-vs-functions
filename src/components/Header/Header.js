import React, { Component } from 'react'
import Center from '../Center/Center'

export default class Header extends Component {
    

    render() {
        const { user, } = this.props
        console.log('!!! ', user)

        return (
            <div>
                <Center>
                    <h1>
                        {
                            `Hello ${!!user ? user.name : 'gues, please signup!'}`
                        }
                    </h1>
                </Center>
            </div>
        )
    }
}
