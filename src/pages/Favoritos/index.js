import Banner from 'components/Banner';
import styles from './favoritos.module.css';
import Titulo from 'components/Titulo';
import { useFavoritosContext } from 'Contex/Favoritos';
import Card from 'components/Card';


function Favoritos({ img, color }) {
    const { favorito } = useFavoritosContext();

    return (
        <>
            <Banner img="favoritos" color="#00bf633d" />
            <Titulo >
                <h4>Favoritos</h4>
            </Titulo>

            <section className={styles.container}>
                {favorito.map(fav => {

                    return <Card {...fav} key={fav.id} />
                })}
            </section>


        </>
    )
}



export default Favoritos