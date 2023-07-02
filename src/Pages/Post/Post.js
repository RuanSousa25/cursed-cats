import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import $ from "jquery";
import { useState, useEffect } from "react";
import { useRef } from "react";
export default function Post() {
    const [input, setInput] = useState();
    const inputRef = useRef();
    const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    inputRef.current.addEventListener("change", handleFileChange);
  }, []);

  const handleFileChange = () => {
    let file = inputRef.current.files[0];
    setInput(inputRef.current.files[0]);

    if(file && file.type.startsWith("image/")){
        let imgUrlTemp = URL.createObjectURL(file);
        setImgUrl(imgUrlTemp);
        console.log(imgUrl);
    }else return
  };

  const isFileSelected = inputRef.current?.files.length > 0;
  const fileLabelClassName = isFileSelected ? styles.file_custom_filled : styles.file_custom_empty;

  function enviarDados(e) {
    e.preventDefault();
    console.log(input);
  }


    return (
        <>
            <h1>Postar</h1>

            <form className={styles.form}>
                <label>Nome do gato: </label>
                <input type="text"></input>
                <label className={fileLabelClassName}>
                    Imagem
                    <input type="file" ref={inputRef} name="arquivo" id="input_file" ></input>
                    {imgUrl && <img src={imgUrl} alt="imagem selecionada"/>}
                </label>

                <button onClick={enviarDados}>Enviar</button>


            </form>
        </>
    )
}