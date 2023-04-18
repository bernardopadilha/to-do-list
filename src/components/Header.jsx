import styles from "./Header.module.css"

import igniteLogo from '../../public/logo.png'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo" />
        </header>
    )
}