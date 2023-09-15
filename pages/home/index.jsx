import styles from "../../styles/homeAuth.module.scss"
import ContentHome from "@/src/components/auth/home/contentHome"
import AsideComponent from "@/src/components/auth/home/asideComponent"
import InfoComponent from "@/src/components/auth/home/infoComponent"
import HeaderAuth from "@/src/components/common/headerAuth"
import { useEffect, useState } from "react"
import axios from "axios"
export default function Home(){

    const [pets,setPets] = useState([])

    useEffect(() =>{
        fetchPets()
        console.log(pets)
    },[])

    const fetchPets = async () =>{
        const resp =  await axios.get("http://localhost:3000/api/animals").then(res => res.data)
        setPets(resp)
    }

    return(
        <>
        <div className={styles.main}>
            <AsideComponent/>
                <ContentHome animal={pets} >
                    <HeaderAuth title="PetZone" left/>
                </ContentHome>
        </div>
        </>
    )
}