
import { useEffect } from "react";
import styles from "./Header.module.css";


export default function Header(){


     
    return(
        <header className={styles.header}>
            <span><h1>GATO</h1></span>
            <p> Seu Site de Gatos de Cabeça para Baixo</p>
        </header>
    )
}