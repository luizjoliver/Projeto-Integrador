import Footer from "@/src/components/common/Footer"
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth"
import Head from "next/head"



const Register = () =>{
    return(
        <>
        <Head>
            <title>PetZone - Register</title>
            

        </Head>
        <HeaderNoAuth/>
        <main>
       <h1>Register Page</h1>
        <Footer/>
        </main>
        </>
    )
}

export default Register
