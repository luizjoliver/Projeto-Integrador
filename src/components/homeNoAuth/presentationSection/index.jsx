import styles from "./styles.module.scss"

const PresentationCardSection = () => {
   return (
      <>
         <div className={styles.container}>
            <main className={styles.main}>
               <section className={styles.sectionPresentation}>
                  <div className={styles.imgPresentation}> 
                     <h1>Bem vindo ao PetZone</h1>
                </div>
               </section>
            </main>
         </div>

      </>
   )
}
export default PresentationCardSection