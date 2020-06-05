import React, { Component } from 'react'
import Center from '../Center/Center'

export default class Header extends Component {


    render() {
        const { user, } = this.props

        return (
            <div>
                <Center>
                    <h1>
                        {`Hello ${!!user ? user.name : 'guest, please signup!'}`}
                    </h1>
                </Center>
            </div>
        )
    }
}
