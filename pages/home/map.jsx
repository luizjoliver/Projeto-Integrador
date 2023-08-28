import AsideComponent from "@/src/components/auth/home/asideComponent"
import styles from "../../styles/maps.module.scss"
import InfoComponent from "@/src/components/auth/home/infoComponent"


export default function Map(){
    return(
        <>
        <div className={styles.main}>
            <AsideComponent/>
           <div className={styles.mapsGoogle}>

           </div>
            <InfoComponent title="Notificações"/>
        </div>
        </>
    )
}