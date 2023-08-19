import styles from "./styles.module.scss"
const Footer = () =>{
    return(
        <>
        <footer className={styles.footer}>
            <div className={styles.container}>
                <ul className={styles.listFooter}>
                    <li>PetZone Inc Software Dev. &copy;</li>
                    <li>Cnpj 000000000000</li>
                    <li>Termos de uso</li>
                </ul>
            </div>
        </footer>
        </>
    )
}   

export default Footer