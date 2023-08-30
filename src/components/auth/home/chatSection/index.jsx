import HeaderAuth from "@/src/components/common/headerAuth";
import styles from "./styles.module.scss";

export default function ChatSection(){
    return(
        <>
        <div className={styles.chatSectionContainer}>
           <div className={styles.headerChat}>
            <p className={styles.people}>🧑 Name</p>
            <p className={styles.cell}>📷 📞</p>
           </div>
        </div>
        </>
    )
}