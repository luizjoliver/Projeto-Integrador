import Link from "next/link"
import styles from "./styles.module.scss"
const HeaderNoAuth = () =>{
        return(
                <>
                  <header className={styles.header}>  
                        <nav className={styles.navBar}>
                                <Link href="/" className={styles.petZoneLogo}>PetZone</Link>
                                <Link href="/">Inicio</Link>
                                <Link href="/">Sobre</Link>
                                <Link href="/">App</Link>
                        </nav>
                        <div className={styles.connectNav}>
                                <span><Link href="/register" className={styles.registerBtn}>Cadastre-se</Link></span>
                                <Link href="/login">Login</Link>
                        </div>
                  </header>
                </>
        )
}
export  default HeaderNoAuth