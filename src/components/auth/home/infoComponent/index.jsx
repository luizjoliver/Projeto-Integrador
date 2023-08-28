import styles from "./styles.module.scss"

export default function InfoComponent({title}){
    return(
        <>
        <div className={styles.infoContainer}>
            <div className={styles.cardsContent}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.card1}>
                    </div>
                    <div className={styles.card2}>
                    </div>
                    <div className={styles.card3}>
                    </div>
            </div>
        </div>
        </>
    )
}
