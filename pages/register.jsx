import LoginForm from "@/src/components/auth/login/form"
import ImageAuth from "@/src/components/common/imageAuth"
import Head from "next/head"
import styles from "../styles/login.module.scss"
import RegisterForm from "@/src/components/auth/register/form"


const Register = () =>{
    return(
        <>
        <Head>
            <title>PetZone - Register</title>
        </Head>
        <main className={styles.main}>
                <ImageAuth/>
                <RegisterForm btnText="Registar" title="Register"/>
            </main>
        
        </>
    )
}

export default Register
