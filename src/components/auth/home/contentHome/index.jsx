import Button from "@/src/components/common/Button"
import styles from "./styles.module.scss"

export default function ContentHome({children,animals}){

   const renderedAnimals = (animals) =>{

   }
    
    return(
        <>
           <div className={styles.content}>
                        {children}
             { animals ?

             <div> </div>

                : (
                    <div className={styles.contentNoAnimals}>
                       <p className={styles.title}>Ops.... Nenhum Pet cadastrado!</p> 
                       <Button bgColor="Pink" showButton href="/home/petAdd">Adicionar Pet</Button>
                     </div>
                     )
             }
        


            </div> 
        </>
    )
}