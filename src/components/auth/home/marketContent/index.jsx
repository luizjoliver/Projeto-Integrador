import styles from "./styles.module.scss"

export default function MarketContent({products}){
    return(
        <>
            { products ?
                (<div>Produts</div>)
             : (<div>Nenhum produto encontrado ....</div>)
            }
        </>
    )
}