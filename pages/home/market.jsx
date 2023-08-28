import AsideComponent from "@/src/components/auth/home/asideComponent"
import styles from "../../styles/market.module.scss"
import MarketAside from "@/src/components/auth/home/marketAside"


export default function Map(){
    return(
        <>
        <div className={styles.main}>
            <AsideComponent/>
           <div className={styles.marketContainer}>
                <p>Market</p>
           </div>
            <MarketAside/>
        </div>
        </>
    )
}