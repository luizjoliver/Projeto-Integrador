import Link from "next/link"
import styles from "./styles.module.scss"
import { LuDog, LuMap, LuShoppingCart } from "react-icons/lu";
import { BsChat } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
export default function AsideComponent (){
    return(
        <>
        <aside className={styles.aside}>
            <ul className={styles.ul}>
                <Link href="/home" className={styles.logoInicial}><LuDog/></Link>
                <Link href="/home/map"><LuMap/></Link>
                <Link href="/home/market"><LuShoppingCart/></Link>
                <Link href="/home/chat"><BsChat/></Link>
            </ul>
            <ul className={styles.ulSetting}>
                <Link href="/home"><FiSettings/></Link>
            </ul>
        </aside>
        </>
        
    )
}