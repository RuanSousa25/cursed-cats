import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import $ from "jquery";
import { useState } from "react";
import { useRef } from "react";
export default function Post() {
    const [input, setInput] = useState();
    const inputRef = useRef();
    function enviarDados(e) {
        e.preventDefault();
        console.log(inputRef.current.files[0]);
    }

    console.log(inputRef)

    return (
        <>
            <h1>Postar</h1>

            <form className={styles.form}>
                <label>Nome do gato: </label>
                <input type="text"></input>
                <label className={inputRef.current?.files.lenght ? styles.file_custom_empty : styles.file_custom_filled}>
                    Imagem:
                    <input type="file" ref={inputRef} name="arquivo" id="input_file" ></input>
                </label>

                <button onClick={enviarDados}>Enviar</button>


            </form>
        </>
    )
}