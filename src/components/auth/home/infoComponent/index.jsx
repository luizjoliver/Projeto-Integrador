import styles from "./styles.module.scss"

export default function InfoComponent({title,info}){
    return(
        <>
        {info ? (<div className={styles.infoContainer}>
            <div className={styles.cardsContent}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.card1}>
                    </div>
                    <div className={styles.card2}>
                    </div>
                    <div className={styles.card3}>
                    </div>
            </div>
        </div>) :
       ( <div className={styles.infoContainer2}>
            <div className={styles.titleContainer}>
                <p className={styles.title2}>{title}</p>
            </div>
            <div className={styles.notificationContainer}>
                <p className={styles.notification}>Sem notificações...</p>
            </div>
        </div>)}
        </>
    )
}
