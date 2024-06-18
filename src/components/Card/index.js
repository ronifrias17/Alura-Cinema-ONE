import styles from "./Card.module.css";
import iconfavorito from "./iconFavorito.png";
import iconNofavorito from "./iconNoFavorito.png";
import { useFavoritosContext } from "Contex/Favoritos";

function Card({ id, capa, titulo }) {

    const { favorito, agregarFavorito } = useFavoritosContext();
    const isFavorito = favorito.some(fav => fav.id === id);
    const icon = isFavorito ? iconfavorito : iconNofavorito;

    return (
        <div className={styles.container} >
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={icon}
                alt="Icono favorito"
                className={styles.favorito}
                onClick={() => agregarFavorito({ id, titulo, capa })}
            />
        </div>

    );
}

export default Card