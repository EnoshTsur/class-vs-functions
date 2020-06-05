import React from 'react'
import Center from '../Center/Center'

export default function Signup({ setUser, }) {

    const [name, setName,] = React.useState('')
    const [age, setAge,] = React.useState('')

    const isValidInputs = () => name !== '' && age !== ''

    return (
        <Center>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Age"
                min="0"
                max="120"
                value={age}
                onChange={e => setAge(e.target.value)}
            />

            <button
                disabled={!isValidInputs()}
                onClick={() => setUser({ name, age, })}
            >
                Signup
                </button>
        </Center>
    )
}
