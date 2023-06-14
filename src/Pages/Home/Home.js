import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useFetchBucket } from "../../Hooks/useFetchBucket";



export default function Home(){
    const {files} = useFetchBucket();
    const [hoveredImage, setHoveredImage] = useState(null);


    return(
        <>
        <h1>Home</h1>
        <div className={styles.main}>
        {files && files.length !== 0 &&
            files.map(
                (e, index)=>
                <img src={e} 
                key={index}
                className={styles["image"+(Math.floor(Math.random() * 5) + 1)]}


                ></img>
                   
                
            )
        }
        </div>
        </>
    )
}