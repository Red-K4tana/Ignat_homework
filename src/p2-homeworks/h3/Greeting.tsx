import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>)=> void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error.length === 0 ? s.inputOk : s.error // need to fix with (?:)
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addUser()
        }
    }

    return (
        <div className={s.someClass}>

            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} className={inputClass}/>
            <button className={s.buttonAdd} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <span className={s.errorSpan}>{error}</span>

        </div>
    )
}

export default Greeting
