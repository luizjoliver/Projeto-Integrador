import LoginForm from "@/src/components/auth/login/form"
import ImageAuth from "@/src/components/common/imageAuth"
import Head from "next/head"
import styles from "../styles/login.module.scss"

const Login = () =>{
    return(
        <>

        <Head>
         <title>PetZone - Login</title>
        </Head>
            <main className={styles.main}>
                <ImageAuth className={styles.ImageAuth}/>
                <LoginForm title="Login" btnText="Entrar" />
            </main>

        </>
    )
}

export default Login