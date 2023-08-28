import HeaderAuth from "@/src/components/common/headerAuth";
import styles from "./styles.module.scss";
import Button from "@/src/components/common/Button";


export default function FormPetAdd(){
    return(
        <>
            <div className={styles.container}>
                <HeaderAuth title="Novo Pet"/>
                <div className={styles.formContainer}>
                    <form action="" className={styles.form}>
                                <div className={styles.animalsAtt}>
                                    <label htmlFor="nome">Nome *</label>
                                    <input type="text"  placeholder="Ex: Rex" id="nome"/>
                                    <label for="animals">Espécie/tipo *</label>
                                    <select name="animals" id="animals">
                                        <option value="Cachorro">Cachorro</option>
                                        <option value="Gato">Gato</option>
                                        <option value="Hamster">Hamster</option>
                                        <option value="Coelho">Coelho</option>
                                    </select>
                                    <label htmlFor="date">Data de nascimento *</label>
                                    <input type="date" id="date" />
                                </div>
                            <div>
                                <label htmlFor="txtArea" >Restrições/Observações</label>
                                <textarea name="txtArea" id="txtArea" cols="30" rows="10"className={styles.txtArea} />
                                
                            </div>
                    </form>
                    <Button showButton href="/home" >Cadastrar</Button>
                </div>
            </div>
        </>
    )
}