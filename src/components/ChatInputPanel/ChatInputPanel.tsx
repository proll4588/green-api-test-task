import React, { FC, useState } from 'react'
import styles from './ChatInputPanel.module.scss'
import ChatInputPanelProps from './ChatInputPanel.props'
import { AiOutlineSend } from 'react-icons/ai'

const ChatInputPanel: FC<ChatInputPanelProps> = ({ onSend }) => {
    /* Вводимое сообщение */
    const [message, setMessage] = useState('')

    // Отправка сообщение
    const send = () => {
        // Проверка наличия сообщения
        if (message.length > 0) {
            onSend && onSend(message)
            setMessage('')
        }
    }

    return (
        <div className={styles.ChatInputPanel}>
            <div className={styles.ChatInputPanel__container}>
                <input
                    className={styles.ChatInputPanel__input}
                    type='text'
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                    // При нажатии Enter отправлять сообщение
                    onKeyDown={(e) => {
                        if (e.code === 'Enter') send()
                    }}
                />
                <button
                    className={styles.ChatInputPanel__btn}
                    onClick={send}
                >
                    <AiOutlineSend className={styles.ChatInputPanel__icon} />
                </button>
            </div>
        </div>
    )
}

export default ChatInputPanel
