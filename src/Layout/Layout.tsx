import React, { FC } from 'react'
import styles from './Layout.module.scss'
import LayoutProps from './Layout.props'
import { Routes, Route } from 'react-router-dom'
import App from '../pages/App/App'
import Auth from '../pages/Auth/Auth'

const Layout: FC<LayoutProps> = () => {
    return (
        <div className={styles.Layout}>
            <div className={styles.Layout__container}>
                <Routes>
                    {/* Главная страница */}
                    <Route
                        path={'/'}
                        element={<App />}
                    />

                    {/* Страница атворизации */}
                    <Route
                        path={'/auth'}
                        element={<Auth />}
                    />
                </Routes>
            </div>
        </div>
    )
}

export default Layout
