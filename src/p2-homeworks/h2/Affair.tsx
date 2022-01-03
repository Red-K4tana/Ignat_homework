import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (itemId: number) => {
        props.deleteAffairCallback(itemId)
    }// need to fix

    const getPriorityStyle = () => {
        if (props.affair.priority === 'high') return s.high
        if (props.affair.priority === 'middle') return s.middle
        if (props.affair.priority === 'low') return s.low
    }

    return (
        <div className={s.affair}>
            <div className= {s.affairItem}>
                {props.affair._id}
            </div>
            <div className= {s.affairItem}>
                {props.affair.name}
            </div>
            <div className= {`${s.affairItem} ${getPriorityStyle()}`}>
                {props.affair.priority}
            </div>

            <button className={s.affair_button} onClick={() => deleteCallback(props.affair._id)}></button>
        </div>
    )
}

export default Affair
//text button