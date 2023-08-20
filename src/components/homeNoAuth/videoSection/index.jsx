import styles from "./styles.module.scss"

const VideoSection = ({videoUrl}) =>{
    return(
    <>
    <section className={styles.videoSection}>
        <div className={styles.videoContent}>
            <iframe src=""  className={styles.video} allow="autoplay;" allowFullScreen>

            </iframe>
        </div>
    </section>
    
    </>
    )
}
export default VideoSection