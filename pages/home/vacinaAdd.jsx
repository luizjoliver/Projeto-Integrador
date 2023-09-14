import AsideComponent from "@/src/components/auth/home/asideComponent"
import InfoComponent from "@/src/components/auth/home/infoComponent"
import styles from "../../styles/homeAddVacina.module.scss"
import Button from "@/src/components/common/Button"



export default function Map(){
    return(
        <>
        <div className={styles.main}>
            <AsideComponent/>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
               
                    <div className={styles.formGroup}>
                        <label htmlFor="nome">Nome da Vacina</label>
                        <input type="text" id="nome"/>
                    </div>

                    <div className={styles.formGroup}>
                    <label htmlFor="data">Data da Vacina</label>
                    <input type="date" id="data" />
                    </div>
                <Button showButton href="/home">Cadastrar</Button>
                </form>
            </div>
            <InfoComponent title="Notificações"/>
        </div>
        </>
    )
}