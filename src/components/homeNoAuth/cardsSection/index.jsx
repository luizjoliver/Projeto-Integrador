import styles from "./styles.module.scss"

const CardsSection = ({imgUrl1,imgUrl2}) =>{
    return(
        <>
                 <section className={styles.main}>
                    <div className={styles.cardsContent}>
                        <h2>Lorem  Ipsum</h2>
                        <p>Integer in sagittis orci, nec feugiat turpis. Integer tellus velit, viverra eget quam vel, molestie molestie elit. Maecenas tincidunt felis turpis convallis.</p>
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