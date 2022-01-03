import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'
import {Input} from "./Input";
// export type UserType =
export type PeopleType = {
    _id: number
    name: string
    age: number
}
export type InitialPeopleType = Array<PeopleType>

const initialPeople: InitialPeopleType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 10},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 20},
    {_id: 4, name: 'Дмитрий', age: 32},
    {_id: 5, name: 'Ирина', age: 25},
]

function HW8() {
    const [people, setPeople] = useState<InitialPeopleType>(initialPeople) // need to fix any
    const [peopleAge, setPeopleAge] = useState('1')
    // need to fix any
    const finalPeople = people.map((p) => (
        <li key={p._id}>
            <div className={s.item}>
                <div>
                    {p.name}
                </div>
                <div>
                    {p.age}
                </div>
            </div>

        </li>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'down'}))
    /*const check = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK', payload: 18}))*/

    const sortByAge = (value: string) => {
        setPeopleAge(value)
        setPeople(homeWorkReducer(initialPeople, {type: 'CHECK', payload: +value}))
    }

    return (
        <div>
            <hr/>
            homeworks 8
            <div className={s.items}>
                <ul>
                    {finalPeople}
                </ul>

                <div className={s.sort_control}>
                    <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                    {/*<div><SuperButton onClick={check}>check 18</SuperButton></div>*/}
                    <div className={s.sort_age}>
                        <div>Age</div>
                        <div><Input value={peopleAge} changeValue={sortByAge}/></div>
                    </div>
                </div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
