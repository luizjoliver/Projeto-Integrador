import AsideComponent from "@/src/components/auth/home/asideComponent"
import styles from "../../styles/maps.module.scss"
import InfoComponent from "@/src/components/auth/home/infoComponent"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"


export default function Map(){
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDf43NRi0uyRTQYEc2e8CEjpsxowNIvB9A"
      })

      return isLoaded ? (
            <>
        <div className={styles.main}>
            <AsideComponent/>
           <div className={styles.mapsGoogle}>
           <GoogleMap
          mapContainerStyle={{width:"100%", height:"100%"}}
          center={{
            lat:-15.835113776311932,
            lng:-48.04595291541454
          }}
          zoom={15}
        >
         
        </GoogleMap>
           </div>
            <InfoComponent title="Notificações"/>
        </div>
        
        </>
    ) : 
    <>
        <p>Carregando...</p>
    </>
    
}