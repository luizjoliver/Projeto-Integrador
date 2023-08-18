import styles from "./styles.module.scss"

const CardSection = ({directionRigth,imgUrl}) =>{
    return(
        <>
            <section className={directionRigth ? styles.card1 : styles.card2}>
                 <div className={styles.imgCard1} style={{backgroundImage: `url(${imgUrl}})`}}>

                 </div>
                 <div className={styles.cardContent}>
                    <h2 className={styles.title}>Lorem ipsum</h2>
                    <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure et, dignissimos rem, esse odio non nisi labore quidem excepturi maiores explicabo placeat, nulla magni alias ut autem ad? Soluta, fugiat?</p>
                 </div>
            </section>
        </>
    )
}
export default CardSection