import React, {ChangeEvent} from 'react';
import s from './HW8.module.css'

type SelectPropsType = {
    changeValue: (value: string) => void
    value: string
}

export const Input = (props: SelectPropsType) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(e.currentTarget.value)
    }


    return (
        <input className={+props.value > 0 ? s.input : s.input_error} type='number' value={props.value} onChange={onChangeCallback}>

        </input>
    );
};

