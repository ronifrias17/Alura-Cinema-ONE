import Banner from 'components/Banner';
import styles from './favoritos.module.css';
import Titulo from 'components/Titulo';


function Favoritos({ img, color }) {
    return (
        <>
            <Banner img="favoritos" color="#00bf633d" />
            <Titulo >
                <h4>Favoritos</h4>
            </Titulo>
            
            <section className={styles.container}>

            </section>


        </>
    )
}



export default Favoritos