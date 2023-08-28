import Button from "@/src/components/common/Button"
import styles from "./styles.module.scss"

export default function ContentHome({children,animal}){

   const renderedAnimals = (animal) =>{
       return animal.map(pet => (
                <>
                    <ul>
                        <li className={styles.petName}>{pet.nome}</li>
                        <li>Idade: {pet.idade}</li>
                        <li>Espécie/Tipo: {pet.tipo}</li>
                        <p className={styles.restrictionP}><span className={styles.restriction}>Restrições : </span>{pet.restricoes}</p>
                    </ul>
                </>
        ))
   }
    
    return(
        <>
           <div className={styles.content}>
                        {children}
             { animal ?

             <div className={styles.contentAnimal}>{renderedAnimals(animal)}</div>

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