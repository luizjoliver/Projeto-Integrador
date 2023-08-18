import styles from "./styles.module.scss"

const CardSection = () =>{
    return(
        <>
            <section className={styles.card1}>
                 <div className={styles.imgCard1}>

                 </div>
                 <div className={styles.cardContent}>
                    <h2 style={styles.title}>Lorem ipsum</h2>
                    <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure et, dignissimos rem, esse odio non nisi labore quidem excepturi maiores explicabo placeat, nulla magni alias ut autem ad? Soluta, fugiat?</p>
                 </div>
            </section>
        </>
    )
}
export default CardSection