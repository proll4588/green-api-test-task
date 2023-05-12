import React, { FC, useEffect, useState } from 'react'
import styles from './Chat.module.scss'
import ChatProps from './Chat.props'
import IMessage from '../../interfaces/message.interface'
import ChatViwer from '../ChatViwer/ChatViwer'
import ChatInputPanel from '../ChatInputPanel/ChatInputPanel'
import useWhatsApp from '../../hooks/whatsapp.hook'

const Chat: FC<ChatProps> = ({ number, onExit }) => {
    /* История сообщений */
    const [history, setHistory] = useState<IMessage[]>([])
    const { sendMessage, receiveNotification, deleteNotification } =
        useWhatsApp()

    useEffect(() => {
        // Каждые 5 секунд отправляем запрос на события
        const interval = setInterval(subscribe, 5000)

        return () => {
            // Удаляем интервал
            clearInterval(interval)
        }
    }, [])

    // Получение и обработка событий
    const subscribe = async () => {
        // Смотрим наличие событий
        let response = await receiveNotification()
        console.log('response >> ', response)

        // Если они есть то
        if (response) {
            // Проверяем воходящее ли это сообщение
            if (
                response.body.typeWebhook === 'incomingMessageReceived' &&
                response.body.messageData.typeMessage === 'textMessage'
            ) {
                // Добавляем сообщение в историю сообщений
                addMessage(
                    response.body.messageData.textMessageData.textMessage,
                    response.body.idMessage,
                    false
                )
            }

            // Удаляем событие
            await deleteNotification(response.receiptId)
        }
    }

    // Отправка сообщения
    const sendMess = (message) => {
        // Отправляем сообщение
        sendMessage(message, number).then((ans) => {
            // Добавляем сообщение в историю
            addMessage(message, ans.idMessage, true)
        })
    }

    // Добавление сообщения в историю
    const addMessage = (message, id, isMy) => {
        setHistory((prev) => [
            ...prev,
            {
                idMessage: id,
                message: message,
                isMy: isMy,
            },
        ])
    }

    return (
        <div className={styles.Chat}>
            <div className={styles.Chat__container}>
                <ChatViwer history={history} />
                <ChatInputPanel onSend={sendMess} />
                <button onClick={onExit}>Покинуть чать</button>
            </div>
        </div>
    )
}

export default Chat
