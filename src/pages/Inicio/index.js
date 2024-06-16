import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie";
import Banner from "../../components/Banner";

function Inicio() {
  return (
    <>
          <Cabecera></Cabecera>
          <Banner img="home" color="#154580" />
          <Pie />
    </>
  );
}

export default Inicio;
