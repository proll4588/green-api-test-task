import React, { FC } from 'react'
import styles from './VoidChatMessage.module.scss'
import VoidChatMessageProps from './VoidChatMessage.props'

const VoidChatMessage: FC<VoidChatMessageProps> = () => {
    return (
        <div className={styles.VoidChatMessage}>
            <div className={styles.VoidChatMessage__container}>
                Пока нет сообщений
            </div>
        </div>
    )
}

export default VoidChatMessage
