import Link from "next/link"
import styles from "./styles.module.scss"
import { LiaShoppingBasketSolid} from "react-icons/lia";

export default function MarketAside (){
    return(
        <>
        <aside className={styles.aside}>
            <ul className={styles.ul}>
                <Link href="/home" className={styles.cart}><LiaShoppingBasketSolid/></Link>
            </ul>
    
        </aside>
        </>
        
    )
}