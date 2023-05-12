import React, { FC, useState } from 'react'
import styles from './AuthForm.module.scss'
import AuthFormProps from './AuthForm.props'

const AuthForm: FC<AuthFormProps> = ({ onAuth }) => {
    /* Данные формы */
    const [id, setId] = useState('')
    const [token, setToken] = useState('')

    const btnHandler = () => {
        // Проверяем валидность данных
        if (id !== null && token.length) {
            onAuth && onAuth(Number(id), token)
        }
    }

    return (
        <div className={styles.AuthForm}>
            <div className={styles.AuthForm__container}>
                <h2 className={styles.AuthForm__title}>Авторизация</h2>
                <input
                    className={styles.AuthForm__input}
                    type='number'
                    placeholder='IdInstance'
                    value={id}
                    onChange={(e) => {
                        setId(e.target.value)
                    }}
                />
                <input
                    className={styles.AuthForm__input}
                    type='text'
                    placeholder='ApiTokenInstance'
                    value={token}
                    onChange={(e) => {
                        setToken(e.target.value)
                    }}
                />
                <button
                    className={styles.AuthForm__btn}
                    onClick={btnHandler}
                >
                    Войти
                </button>
            </div>
        </div>
    )
}

export default AuthForm
