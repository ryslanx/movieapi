import React from 'react';
import styles from './BaseLayout.module.css'
export const  BaseLayout = ({children}) => {
    return(<div className={styles.main_wrapper}>
        <header>header</header>
        <main>
            {children}
        </main>
        <footer>footer</footer>
    </div>)
}