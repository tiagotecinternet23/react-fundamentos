import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalhesProduto() {
  const [produto, setProduto] = useState({});

  /* Usamos o hook useParams do React Router DOM
  para ter acesso aos parâmetros da rota dinâmica 
  neste caso, o parâmetro chamado "id". */
  const { id } = useParams();

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
        const dados = await resposta.json();
        setProduto(dados);
      } catch (error) {
        console.error("Erro ao carregar produto: " + error);
      }
    };

    carregarDados();
  }, [id]);

  return (
    <article>
      <h2> {produto.title} </h2>
      <p>
        <b>Categoria: </b> {produto.category}
      </p>
      <p>
        <b>Preço: </b> {produto.price}
      </p>
      <p> {produto.description} </p>

      <img src={produto.image} alt="" style={{ width: "300px" }} />
    </article>
  );
}

export default DetalhesProduto;
