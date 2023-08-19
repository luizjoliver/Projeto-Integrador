import styles from "./styles.module.scss"

const VideoSection = ({videoUrl}) =>{
    return(
    <>
    <section className={styles.videoSection}>
        <div className={styles.videoContent}>
            <iframe src="" frameborder="0" className={styles.video} allow="autoplay;" allowfullscreen>

            </iframe>
        </div>
    </section>
    
    </>
    )
}
export default VideoSection