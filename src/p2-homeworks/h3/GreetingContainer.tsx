import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {v1} from "uuid";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (objName: UserType) => void // need to fix any
}


// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)
        setError('')
        console.log(name)
    }

    const addUser = () => {
        let objName = { _id: v1(), 'name': name.trim()}
        //---------------------------------------
        if (objName.name.length === 0) {
            setError('Алярма!!! Введите имя!')
            return
        }
        addUserCallback(objName)
        setName('')
        alert(`Hello `+ objName.name +`!`)
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
