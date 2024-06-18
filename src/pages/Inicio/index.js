import Banner from "../../components/Banner";
import Titulo from "components/Titulo";
import Card from "../../components/Card";
import videos from "data/db.json";
import styles from './index.module.css';


function Inicio() {
  return (
    <>
      <Banner img="home" color="#154580" />
      <Titulo>
        <h4>Un lugar para guardar sus videos favoritos</h4>
      </Titulo>
      <section className={styles.container} >
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>

    </>
  );
}

export default Inicio;
