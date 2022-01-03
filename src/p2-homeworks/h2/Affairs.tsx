import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id}
            affair={a}//-a это элемент массива
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (value: FilterType) => {
        props.setFilter(value)
    } // need to fix
    const setHigh = (value: FilterType) => {
        props.setFilter(value)
    }
    const setMiddle = (value: FilterType) => {
        props.setFilter(value)
    }
    const setLow = (value: FilterType) => {
        props.setFilter(value)
    }

    return (
        <div className={s.main_affairs}>

            {mappedAffairs}
            <div className={s.block_button}>
                <button onClick={() => setAll('all')}>All</button>
                <button onClick={() => setHigh('high')}>High</button>
                <button onClick={() => setMiddle('middle')}>Middle</button>
                <button onClick={() => setLow('low')}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
