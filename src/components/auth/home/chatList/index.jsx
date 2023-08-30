import HeaderAuth from "@/src/components/common/headerAuth";
import styles from "./styles.module.scss";

export default function ChatList(){
    return(
        <>
        <div className={styles.chatListContainer}>
            <HeaderAuth title="Conversas" left>
                <input type="search" className={styles.search} placeholder="Search" />
                <p className={styles.add}>+</p>
            </HeaderAuth>
            <div className={styles.chats}>
                <div className={styles.chat}></div>
                <div className={styles.chat}></div>
                <div className={styles.chat}></div>
                <div className={styles.chat}></div>
            </div>
        </div>
        </>
    )
}