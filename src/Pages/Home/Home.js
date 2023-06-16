import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useFetchBucket } from "../../Hooks/useFetchBucket";



export default function Home(){
    const {files, loading} = useFetchBucket();
    let alNumb = 0;



    return(
        <>
        <h1>Home</h1>
        <div className={styles.main}>
        {loading && <p>Carregando...</p>}
        {!loading && files && files.length !== 0 &&
            files.map(
                (url, index)=>
                {
                    alNumb = (Math.floor(Math.random() * 5) + 1)
               return (<div key={index} className={styles["container"+alNumb]}>
                                
                     <img src={url} 
                     
                     className={styles["image"+alNumb]}
                     ></img>
                </div>)
                   }
                
            )
        }
        </div>
        </>
    )
}