import styles from "./styles.module.scss"

const TextSection = ({imgColor}) =>{
    return(
        <>
        <section className={imgColor === "Pink" ? styles.textSection1 : styles.textSection2 } >
            <div className={styles.content}>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nisi voluptatum accusamus laborum? Voluptates officia tenetur, est asperiores obcaecati tempore maiores cumque numquam! Commodi exercitationem aliquid nam, fugiat aperiam ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a laborum! Earum molestiae numquam quam eius ipsa quidem pariatur! Aliquid, officia. Nostrum odio nemo ipsum a, animi similique aliquid totam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nisi voluptatum accusamus laborum? Voluptates officia tenetur, est asperiores obcaecati tempore maiores cumque numquam! Commodi exercitationem aliquid nam, fugiat aperiam ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a laborum! Earum molestiae numquam quam eius ipsa quidem pariatur! Aliquid, officia. Nostrum odio nemo ipsum a, animi similique aliquid totam.
                Eveniet nisi voluptatum accusamus laborum? Voluptates officia tenetur, est asperiores obcaecati tempore maiores cumque numquam! Commodi exercitationem aliquid nam, fugiat aperiam ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a laborum! Earum molestiae numquam quam eius ipsa quidem pariatur! Aliquid, officia. Nostrum odio nemo ipsum a, animi similique aliquid totam
                </p>
            </div>
        </section>
        </>
    )
}
export default TextSection