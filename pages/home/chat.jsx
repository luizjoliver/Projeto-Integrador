import AsideComponent from "@/src/components/auth/home/asideComponent"
import styles from "../../styles/chat.module.scss"
import ChatList from "@/src/components/auth/home/chatList"
import ChatSection from "@/src/components/auth/home/chatSection"





export default function Map(){
    return(
        <>
        <div className={styles.main}>

            <AsideComponent/>
            <div className={styles.chatContainer}>
                <ChatList/>
                <ChatSection/>
            </div>

            
                
        </div>
        </>
    )
}