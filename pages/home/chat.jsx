import AsideComponent from "@/src/components/auth/home/asideComponent"
import styles from "../../styles/chat.module.scss"
import MarketAside from "@/src/components/auth/home/marketAside"


export default function Map(){
    return(
        <>
        <div className={styles.main}>
            <AsideComponent/>
           <div className={styles.chatContainer}>
                <p>ChatArea</p>
           </div>
        </div>
        </>
    )
}