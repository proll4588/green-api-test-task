import React, { FC } from 'react'
import styles from './Auth.module.scss'
import AuthProps from './Auth.props'
import AuthForm from '../../components/AuthForm/AuthForm'
import { Navigate } from 'react-router-dom'
import useWhatsApp from '../../hooks/whatsapp.hook'

const Auth: FC<AuthProps> = () => {
    const { doAuth, isAuth } = useWhatsApp()

    // Если пользователь уже авторизован
    // перебрасываем его на страницу приложения
    if (isAuth) return <Navigate to={'/'} />

    return (
        <div className={styles.Auth}>
            <div className={styles.Auth__container}>
                <AuthForm onAuth={doAuth} />
            </div>
        </div>
    )
}

export default Auth
