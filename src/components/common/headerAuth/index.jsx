import styles from "./styles.module.scss"

export default function HeaderAuth({title,left}){
    return(
        <>
        <header className={ left ? styles.header2 : styles.header}>
            <p className={styles.title}>{title}</p>
        </header>
        </>
    )
}