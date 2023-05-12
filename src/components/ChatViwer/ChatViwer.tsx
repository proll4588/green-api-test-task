import React, { FC } from 'react'
import styles from './ChatViwer.module.scss'
import ChatViwerProps from './ChatViwer.props'
import ChatMessage from '../ChatMessage/ChatMessage'
import VoidChatMessage from '../VoidChatMessage/VoidChatMessage'

const ChatViwer: FC<ChatViwerProps> = ({ history }) => {
    return (
        <div className={styles.ChatViwer}>
            <div className={styles.ChatViwer__container}>
                {history.length ? (
                    history.map((message) => (
                        <ChatMessage
                            message={message}
                            key={message.idMessage}
                        />
                    ))
                ) : (
                    // При отсутсвии сообщение выводим сообщение
                    <VoidChatMessage />
                )}
            </div>
        </div>
    )
}

export default ChatViwer
