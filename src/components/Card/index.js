import styles from "./Card.module.css";
import iconfavorito from "./iconFavorito.png";

function Card({ id, capa, titulo }) {
    return (
        <div className={styles.container} >
            <img src={capa} alt={titulo} className={styles.capa} S />
            <h2>{titulo}</h2>
            <img src={iconfavorito} alt="Icono favorito" />
        </div>

    );
}

export default Card