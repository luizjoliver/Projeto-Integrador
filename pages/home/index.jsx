import styles from "../../styles/homeAuth.module.scss"
import ContentHome from "@/src/components/auth/home/contentHome"
import AsideComponent from "@/src/components/auth/home/asideComponent"
import InfoComponent from "@/src/components/auth/home/infoComponent"
import axios from "axios"
import { useEffect, useState } from "react"
import HeaderAuth from "@/src/components/common/headerAuth"
export default function Home(){

    const [animals, setAnimals] = useState([])

    useEffect(() =>{
        fetchAnimals()
    })

    const  fetchAnimals = async () =>{
        const resp = await axios.get("http://localhost:3000/api/animals").then((res) => res.data)
        setAnimals(resp)
    }

    return(
        <>
        <div className={styles.main}>
            <AsideComponent/>
                <ContentHome animal={animals}>
                    <HeaderAuth title="PetZone" left/>
                </ContentHome>
            <InfoComponent title="Notificações"/>
        </div>
        </>
    )
}