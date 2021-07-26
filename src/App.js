// 4. Importar Header
// 6. Importar Formulario
// 13. Definir state global de categoria.
// 16. Llamar a la API (News API) con useEffect + fetch() para que cuando el usuario seleccione una categoria y se ejecute useSelect, se muestren las noticias elegidas. Se incluye categoria como dependencia para que no ejecute el efecto nuevamente mientras que categoria no cambie.
// 17. Crear useState de noticias que tendrá un value inicial de un arreglo. Almacenar la respuesta de la API actualizando con ella el state de noticias (guardarNoticias)
// 20. Importar ListadoNoticias. Se le pasa como prop las noticias
// 24. Documentar componentes con Prop Types.
// 25. End Of Project.

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { useState, useEffect } from "react";

function App() {
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=e58f7854bda4430bb680635507a6c62c`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);
  return (
    <>
      <Header titulo="Noticias de Hoy" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
