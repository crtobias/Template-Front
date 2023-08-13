import { useState } from "react";
import styles from "./nav.module.css"

export const Nav = () => {

  const [modoNav, setModoNav] = useState(true);
  const toggleModo = () => {
    setModoNav((prevState) => !prevState); // Cambia el estado entre verdadero y falso (modo claro y oscuro)
  };


  return (

    <section className={styles.navcontainer}>


      <div className={styles.navmobile}>
        
        <h2 className={styles.navmobileboton} onClick={toggleModo}></h2>

        <div className={`${styles.navmobileInicial} ${modoNav ? styles.navmobileInicial : styles.modoActivo}`}>
          <h2 className={styles.navmobilebotonCerrar} onClick={toggleModo}></h2>
          <div className={styles.navmobilebutons}>
            <p>X</p> <br />
            <p>X</p> <br />
            <p>X</p> <br />
          </div>
        </div>

      </div>




      <div className={styles.navdesktop}>
        <p>x</p>
        <p>x</p>
        <p>x</p>
      </div>



    </section>
  )
}