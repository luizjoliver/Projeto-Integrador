import styles from "./styles.module.scss"

export default function HeaderAuth({title,left,children}){
    return(
        <>
        <header className={ left ? styles.header2 : styles.header}>
            <p className={styles.title}>{title}</p>
            {children}
        </header>
        </>
    )
}