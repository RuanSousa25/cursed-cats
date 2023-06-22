

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <span><h1>GATO</h1></span>
      <p>Seu Site de Gatos ą̵̞̠̩̖̤̥͝ͅl̵̪̾̕͝m̶͈̌͜a̵͍͓͑̀͒̌͋̈͘d̴̢͓̋͂̊̊͝i̴̢̗͈͌̾͝ç̷̧̮̥̘̯̈́o̶͙̖̫̠͑̅̈́̽̉͋̕a̶͙͈͍̝̟̥͖͓͌̉͆̌̒̈́͝d̵͈̀̕o̴̭̩͇͒̏̾s̶̗͎̲̀̈́̈́̂̇̏</p>
      <nav>
        <NavLink to="/"  className={({isActive})=> (isActive? styles.active:"")}
        >Home</NavLink>
        <NavLink to="/post" className={({isActive})=> (isActive? styles.active:"")}>Postar</NavLink>
        <NavLink to="/register" className={({isActive})=> (isActive? styles.active:"")}>Registrar</NavLink>
        <NavLink to="/login" className={({isActive})=> (isActive? styles.active:"")}>
          Login
        </NavLink>
        
      </nav>
    </header>
  );
}