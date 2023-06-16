
import { useEffect } from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";


export default function Header(){


     
    return(
        <header className={styles.header}>
            <span><h1>GATO</h1></span>
            <p> Seu Site de Gatos ą̵̞̠̩̖̤̥͝ͅl̵̪̾̕͝m̶͈̌͜a̵͍͓͑̀͒̌͋̈͘d̴̢͓̋͂̊̊͝i̴̢̗͈͌̾͝ç̷̧̮̥̘̯̈́o̶͙̖̫̠͑̅̈́̽̉͋̕a̶͙͈͍̝̟̥͖͓͌̉͆̌̒̈́͝d̵͈̀̕o̴̭̩͇͒̏̾s̶̗͎̲̀̈́̈́̂̇̏</p>
            <nav>
                <a href="/post"> Postar</a>
                <a href="/">Home</a>
            </nav>
        </header>
    )
}