import styles from "./styles.module.scss";
import { AiFillPhone,AiFillCamera } from "react-icons/ai";
import { MdPeopleOutline} from "react-icons/md";
export default function ChatSection(){
    return(
        <>
        <div className={styles.chatSectionContainer}>
           <div className={styles.headerChat}>
           <div className={styles.peopleContainer}> 
            <p><MdPeopleOutline/> </p>
            <p>Name </p>
            </div>
            <div className={styles.cellContainer}> 
                <p><AiFillCamera/></p>
                <p><AiFillPhone/></p>
            </div>
           </div>
           <input type="text" />
        </div>
        </>
    )
}