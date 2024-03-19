import Pai from "./Questao01/Pai";
import * as PC from "./Questao02/MeuPC";
import * as Batalha from "./Questao03/Batalha";

function App() {
  return (
    <div>
      <h1>Questão 1</h1>
      <hr />
      <Pai />
      <br />
      <hr />
      <br />

      <h1>Questão 2</h1>
      <hr />
      <PC.PlacaMae nome={"H354"} preco={1249.9} />
      <PC.Memoria nome={"HyperX"} preco={320.21} />
      <PC.PlacaDeVideo nome={"RTX3090"} preco={4332.21} />
      <br />
      <hr />
      <br />

      <h1>Questão 3</h1>
      <hr />
      <Batalha.World>
        <Batalha.Arena1 />
      </Batalha.World>
      <br />
      <hr />
      <br />

      <h1>Questão 3 - Opicional</h1>
      <hr />
      <Batalha.World>
        <Batalha.Arena2 arena="NeoQuímica Arena">
          <Batalha.Hero2 nome="Link" img="https://avatars.mds.yandex.net/i?id=259d8f8d518898f0b0711a36756d8400f12a41d1-12608033-images-thumbs&n=13" />
          <Batalha.Enemy2 nome="Nelson" img="https://i.pinimg.com/originals/91/92/fb/9192fb8a99b537dc9a39384b201b6ed4.png"/>
        </Batalha.Arena2>
        <br />
        <Batalha.Arena2 arena="UFC">
          <Batalha.Hero2 nome="Princesa Sabrina" img="https://www.pngitem.com/pimgs/m/514-5143388_transparent-disney-junior-clipart-princess-sofia-png-png.png" />
          <Batalha.Enemy2 nome="Cachorro" img="https://i.kym-cdn.com/photos/images/original/001/980/737/0ae.png" />
        </Batalha.Arena2>
      </Batalha.World>
    </div>
  )
}

export default App;
