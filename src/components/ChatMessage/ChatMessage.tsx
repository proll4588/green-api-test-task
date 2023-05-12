import React, { FC } from 'react'
import styles from './ChatMessage.module.scss'
import ChatMessageProps from './ChatMessage.props'

const ChatMessage: FC<ChatMessageProps> = ({ message }) => {
    return (
        <div
            className={styles.ChatMessage}
            style={{
                // Положение сообщения в зависимости от его отправителя
                justifyContent: message.isMy ? 'end' : 'start',
            }}
        >
            <div className={styles.ChatMessage__container}>
                {message.message}
            </div>
        </div>
    )
}

export default ChatMessage
