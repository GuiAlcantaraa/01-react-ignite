import styles from './Header.module.css';

import iginteLogo from '../../assets/ignite-logo.svg'

console.log(styles)

export function Header() {
    return (
        <header className={styles.header} >

            <img src={iginteLogo} alt="Logo do Ignite" />
        </header>
    )
}