import { Link } from "react-router-dom";
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
            <Link className={styles.link} to={`/${id}`} >
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2 className={styles.titulo}>{titulo}</h2>
            </Link>
            <img src={icon}
                alt="Icono favorito"
                className={styles.favorito}
                onClick={() => agregarFavorito({ id, titulo, capa })}
            />
        </div>

    );
}

export default Card