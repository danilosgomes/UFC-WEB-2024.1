import React, { cloneElement } from "react";

function Hero1({ nome, img }) {
  return (
    <div>
      <h2>Herói</h2>
      <h3>Nome: {nome}</h3>
      <h3>Imagem:</h3>
      <img src={img} alt={nome} style={{ width: "240px" }} />
    </div>
  );
}

function Enemy1({ nome, img }) {
  return (
    <div>
      <h2>Enemy</h2>
      <h3>Nome: {nome}</h3>
      <h3>Imagem:</h3>
      <img src={img} alt={nome} style={{ width: "240px" }} />
    </div>
  );
}

function Hero2({ nome, img, arena }) {
  return (
    <div>
      <h2>Herói</h2>
      <h3>Nome: {nome}</h3>
      <h3>Arena: {arena}</h3>
      <h3>Imagem:</h3>
      <img src={img} alt={nome} style={{ width: "240px" }} />
    </div>
  );
}

function Enemy2({ nome, img, arena }) {
  return (
    <div>
      <h2>Enemy</h2>
      <h3>Nome: {nome}</h3>
      <h3>Arena: {arena}</h3>
      <h3>Imagem:</h3>
      <img src={img} alt={nome} style={{ width: "240px" }} />
    </div>
  );
}

function Arena1() {
  return (
    <div>
      <Hero1 nome="Baki" img="https://avatars.mds.yandex.net/i?id=2eacea4136d42776c60d52768c539be85946e7ef-4589919-images-thumbs&n=13" />
      <Enemy1 nome="Yujiro" img="https://pbs.twimg.com/media/FONjkDTaAAMORKt?format=jpg&name=4096x4096" />
    </div>
  );
}

function Arena2({ children, arena }) {
  return (
    <div>
      <h2>Arena: {arena}</h2>
      {React.Children.map(children, (child) => {
        return cloneElement(child, { arena: arena });
      })}
    </div>
  );
}

function World({ children }) {
  return <div>{children}</div>;
}

export { Hero1, Enemy1, Hero2, Enemy2, Arena1, Arena2, World };
