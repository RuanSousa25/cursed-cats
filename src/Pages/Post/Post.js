import { Link } from "react-router-dom";
import styles from "./Post.module.css";
export default function Post(){
    
    return (
         <>
    <h1>Postar</h1>
      
        <form className={styles.form}>
            <label>Nome do gato: </label>
            <input type="text"></input>
            <label className={styles.file_custom_empty}>
                Imagem:
            <input type="file" name="arquivo"></input>
                </label>

                <button>Enviar</button>
            
            
        </form>
    </>
    )
}