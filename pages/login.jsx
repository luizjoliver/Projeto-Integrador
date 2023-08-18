import Footer from "@/src/components/common/Footer"
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth"
import Head from "next/head"

const Login = () =>{
    return(
        <>
        <Head>
         <title>PetZone - Login</title>
        </Head>
         <HeaderNoAuth/>
        <h1>Login Page</h1>

        <main>
         <p>Contéudo aqui</p>
        </main>

        <Footer/>
        </>
    )
}

export default Login