import styles from "./Home.module.css"
import { useEffect } from "react";
import { useFetchBucket } from "../../Hooks/useFetchBucket";
export default function Home(){
    const {files} = useFetchBucket();


    return(
        <>
        <h1>Home</h1>
        <div className={styles.main}>
        {files && files.length !== 0 &&
            files.map(
                (e)=>
                <img src={e} className={
                    Math.floor(Math.random() * 5) + 1
                }></img>
                   
                
            )
        }
        </div>
        </>
    )
}