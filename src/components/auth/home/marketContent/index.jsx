import styles from "./styles.module.scss"

export default function MarketContent({products}){

    const renderedProducts = (products) =>{
        return products.map((product) =>(
            <>
                   
            <div className={styles.product}>
                <p className={styles.titleProduct}>{product.nome}</p>
            </div>
        
        </>
        ))
    }


    return(
        <>
        <div className={styles.marketContent}>
            { products ?
                (   
                        <div className={styles.renderedContent}>
                             <div className={styles.productsCategory}>
                           { renderedProducts(products)}
                           </div>
                            <div className={styles.featured}>
                                <p className={styles.titleFeatured}>Destaques</p>
                            </div>
                        </div>
                      )
             : (<div className={styles.noRendered}>
                    <p>Nenhum produto encontrado ....</p>
                </div>)
            }
        </div>
        </>
    )
}