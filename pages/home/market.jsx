import AsideComponent from "@/src/components/auth/home/asideComponent"
import styles from "../../styles/market.module.scss"
import MarketAside from "@/src/components/auth/home/marketAside"
import HeaderAuth from "@/src/components/common/headerAuth"
import MarketContent from "@/src/components/auth/home/marketContent"


export default function Map(){
    return(
        <>
        <div className={styles.main}>
            <AsideComponent/>
                <div className={styles.content}>
                  <div className={styles.heading}>
                    <HeaderAuth title="Mercado Pet" left >
                          <input type="search" className={styles.search} placeholder="Search" />
                          <p className={styles.localization}>Próximos de Taguatinga</p>
                    </HeaderAuth>
                  </div>
                  <div className={styles.marketSection}>
                    <MarketContent/>
                  </div>
                </div>
            <MarketAside/>
            
        </div>
        </>
    )
}
