import Link from "next/link"
import styles from "./styles.module.scss"

const ImageAuth =() =>{
    return(
        <>
        <section className={styles.imgSection}>
           <Link className={styles.logo} href="/">Petzone</Link>
        </section>
        </>
    )
}
export default ImageAuth