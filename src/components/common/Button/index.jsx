import Link from "next/link"
import styles from "./styles.module.scss"

const Button = ({children,href, showButton,bgColor}) =>{
    return(<>
    
        { showButton && <div className={styles.container}>
            <button className={bgColor === "Pink"? styles.button1 : styles.button2} >
                <Link href={href}>{children}</Link>
            </button>
        </div>}
    </>)
}
export default Button