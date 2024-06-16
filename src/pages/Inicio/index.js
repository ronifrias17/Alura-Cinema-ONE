import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie";
import Banner from "../../components/Banner";
import Titulo from "components/Titulo";
import Card from "../../components/Card";
import videos from "data/db.json";
import styles from './index.module.css';


function Inicio() {
  return (
    <>
      <Cabecera></Cabecera>
      <Banner img="home" color="#154580" />
      <Titulo>
        <h4>Un lugar para guardar sus videos favoritos</h4>
      </Titulo>
      <section className={styles.container} >
        {videos.map((video) => {
          return <Card {...videos} key={video.id} />
        })}
      </section>


      <Pie />
    </>
  );
}

export default Inicio;
