import AsideComponent from "@/src/components/auth/home/asideComponent"
import InfoComponent from "@/src/components/auth/home/infoComponent"
import styles from "../../styles/homeAuth.module.scss"
import FormPetAdd from "@/src/components/auth/home/formPetAdd"


export default function Map(){
    return(
        <>
        <div className={styles.main}>
            <AsideComponent/>
             <FormPetAdd/>
            <InfoComponent title="Notificações"/>
        </div>
        </>
    )
}