import React from 'react'
import Center from '../Center/Center'

export default function Header({ user, }) {

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
