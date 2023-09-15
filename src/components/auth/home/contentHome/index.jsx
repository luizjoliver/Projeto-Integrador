import Button from "@/src/components/common/Button"
import styles from "./styles.module.scss"
import Link from "next/link";

export default function ContentHome({children,animal}){
    console.log(animal);
   const renderedAnimals = (animal) =>{
       return animal.map(pet => (
                <>
                    <ul className={styles.listAnimal}>
                        <img src={pet.imgPet} alt="imgPet" className={styles.petImg} />
                        <li className={styles.petName}>{pet.nome}</li>
                        <li><span className={styles.atributte}>Idade:</span> {pet.idade}</li>
                        <li><span className={styles.atributte}>Espécie/Tipo:</span> {pet.tipo}</li>
                        <p><span className={styles.atributte}>Restrições: </span>{pet.restricoes}</p>
                        <h2 className={styles.atributte} >Vacinas</h2>
                        <ul>
                            {pet.vacinas?.map((vacinas,i) =>( 
                            <>
                            <div className={styles.petAtts}>
                                <li>{vacinas.nome} - </li>
                                <li className={styles.date}>{vacinas.data}</li>
                            </div>
                            </>
                            ))}
                            <span className={styles.addVacina}>
                                <Link href="/home/vacinaAdd">Adiconar vacina +</Link>
                            </span>
                        </ul>
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