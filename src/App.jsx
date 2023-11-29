import Cabecalho from "./Cabecalho";

function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <section>
          <h2>Conteúdo da aplicação</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            labore? Officia quae quo a quas excepturi distinctio sint voluptas
            labore iste veniam possimus facere adipisci sit repellat, voluptate,
            expedita aspernatur.
          </p>

          <article>
            <h3>Artigo 1</h3>
            <p>Conteúdo do artigo 1....</p>
          </article>

          <article>
            <h3>Artigo 2</h3>
            <p>Conteúdo do artigo 2....</p>
          </article>

          <article>
            <h3>Artigo 3</h3>
            <p>Conteúdo do artigo 3....</p>
          </article>
        </section>
      </main>

      <footer>
        <h2>Rodapé da aplicação</h2>
      </footer>
    </>
  );
}

export default App;
