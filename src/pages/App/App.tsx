import React, { FC, useState } from 'react'
import styles from './App.module.scss'
import AppProps from './App.props'
import { Navigate } from 'react-router-dom'
import Chat from '../../components/Chat/Chat'
import NumberForm from '../../components/NumberForm/NumberForm'
import useWhatsApp from '../../hooks/whatsapp.hook'

const App: FC<AppProps> = () => {
    /* Номер диалога */
    const [number, setNumber] = useState(null)
    const { unAuth, isAuth } = useWhatsApp()

    // Если пользователь не авторизован
    // отправляем на страницу авторизации
    if (!isAuth) {
        return <Navigate to={'/auth'} />
    }

    // Сохранение номера
    const formHandler = (number) => {
        setNumber(number)
    }

    // Выход из чата
    const exitChat = () => {
        setNumber(null)
    }

    return (
        <div className={styles.App}>
            <div className={styles.App__container}>
                {number ? (
                    <Chat
                        number={number}
                        onExit={exitChat}
                    />
                ) : (
                    <>
                        <NumberForm onEnter={formHandler} />
                        <button
                            className={styles.App__btn}
                            onClick={unAuth}
                        >
                            Выйти
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default App
