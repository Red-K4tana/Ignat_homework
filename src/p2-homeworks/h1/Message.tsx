import React from 'react'
import s from './Message.module.css';

type messageTypeProps = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: messageTypeProps) {
    return (
        <div className={s.message}>
            <div className={s.block_ava}>
                <div className={s.ava}>
                    <img src={props.avatar} alt=""/>
                </div>
            </div>
            <div className={s.block_content}>
                <div className={s.content}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.text}>
                        {props.message}
                    </div>
                </div>
            </div>
            <div className={s.block_time}>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>

    )
}

export default Message
