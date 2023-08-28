import Link from "next/link"
import styles from "./styles.module.scss"
import Button from "@/src/components/common/Button"

const LoginForm = ({title,btnText}) =>{
    return(
        <>
            <section className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <h1 className={styles.title}>{title}</h1>

                        <div className={styles.form}>
                            <label htmlFor="userName">Username</label>
                            <input type="text" name="userName" id="userName" placeholder="@email.com"/>
                        </div>

                        <div className={styles.form}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </div>
                        <div className={styles.checkContainer}>
                            <div className={styles.checkbox}>
                            <input type="checkbox" name="connected" id="connected" />
                            <label htmlFor="connected">Manter Conectado ?</label>
                            </div>
                                <div>
                                    <Link className={styles.link} href="/" style={{ whiteSpace: "nowrap" }}>Esqueceu a senha?</Link>
                                </div>
                        </div>

                        <Button showButton bgColor="Pink" href="/home">{btnText}</Button>
                     
                </div>
            </section>
        </>
    )
}
export default LoginForm