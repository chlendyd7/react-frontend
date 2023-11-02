import React from "react";
import style from "Message.module.scss";


class Message extends React.Component{
    render(){
        return (
            <div className={style.wrapper}>
                Message Component
            </div>
        )
    }
}

export default Message;