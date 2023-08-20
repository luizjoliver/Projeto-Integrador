import styles from "./styles.module.scss"

const CardsSection = ({imgUrl1,imgUrl2,children,title}) =>{
    return(
        <>
                 <section className={styles.main}>
                    <div className={styles.cardsContent}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.description}>{children}</p>
                    </div>
                    <div className={styles.cardsContainer}>
                        <div className={styles.imgCard1} style={{backgroundImage:`url(${imgUrl1})`}}></div>
                        <div className={styles.imgCard2} style={{backgroundImage:`url(${imgUrl2})`}}></div>
                    </div>
                    </section>
             
        </>
    )
}
export default CardsSection