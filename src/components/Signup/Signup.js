import React from 'react'
import Center from '../Center/Center'

export default function Signup({ setUser, }) {

    const [name, setName,] = React.useState('')
    const [age, setAge,] = React.useState('')

    const [nameError, setNameError, ] = React.useState(false)
    const [ageError, setAgeError, ] = React.useState(false)

    const nameInput = React.useRef()
    const ageInput = React.useRef()

    
    function handleClick() {
        if(name === '') {
            setNameError(true)
            nameInput.current.focus()
            return;
        }

        if(age === '') {
            setAgeError(true)
            ageInput.current.focus()
            return;
        }

        setUser({ name, age, })
    }

    return (
        <Center>
            <input
                ref={nameInput}
                style={{
                    border: nameError ? '1px solid red': '1px solid grey'
                }}
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => {
                    setName(e.target.value)
                    setNameError(false)
                }}
            />

            <input
                ref={ageInput}
                style={{
                    border: ageError ? '1px solid red': '1px solid grey'
                }}
                type="number"
                placeholder="Age"
                min="0"
                max="120"
                value={age}
                onChange={e =>  {
                    setAge(e.target.value)
                    setAgeError(false)
                }}
            />

            <button
                onClick={handleClick}
            >
                Signup
                </button>
        </Center>
    )
}
