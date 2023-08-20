import Button from "../../common/Button"
import styles from "./styles.module.scss"

const TextSection = ({bgColor,showButton,children,childrenBtn,href}) =>{
    return(
        <>
        <section className={bgColor === "Pink" ? styles.textSection1 : styles.textSection2 } >
            <div className={styles.content}>
                <h2 className={styles.title}>Lorem Ipsum</h2>
                <p className={styles.description}>
                    {children}
                </p>
                <Button showButton={showButton} href={href} bgColor={bgColor}> {childrenBtn}</Button>
            </div>
        </section>
        </>
    )
}
export default TextSection