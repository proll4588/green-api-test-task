import React, {FC} from 'react'
import styles from './Layout.module.scss'
import LayoutProps from './Layout.props'

const Layout: FC<LayoutProps> = () => {
    return (
        <div className={styles.Layout}>
            <div className={styles.Layout__container}>
                Layout Component
            </div>
        </div>
    )
}

export default Layout
