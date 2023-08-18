import Link from "next/link"
import styles from "./styles.module.scss"
const HeaderNoAuth = () =>{
        return(
                <>
                <header className={styles.header}>
                        <nav className={styles.nav}>
                                <ul className={styles.ul}>
                                        <li><Link href="/">Home Logo</Link></li>
                                        <li><Link href="/login">Login</Link></li>
                                        <li><Link href="/register">Register</Link></li>
                                </ul>
                        </nav>
                </header>
                </>
        )
}
export  default HeaderNoAuth