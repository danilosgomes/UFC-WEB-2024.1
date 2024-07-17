import { useState } from "react"

const SaveLoadData = () => {

  const aluno1 = {
    nome: "Marcio", 
    matricula: 919191, 
    curso: "SI"
  }
  const aluno2 = {
    nome: "Danilo", 
    matricula: 919391, 
    curso: "DD"
  }

  const [Resultado1, setResultado1] = useState()
  const [Resultado2, setResultado2] = useState()
  

  function SaveDataLocal() {
    localStorage.setItem("aluno1", JSON.stringify(aluno1))
    alert("Foi")
  }

  function LoadDataLocal() {
    const loadAluno = localStorage.getItem("aluno1")
    setResultado1(JSON.parse(loadAluno))
  }

  function SaveDataSession() {
    sessionStorage.setItem("aluno2", JSON.stringify(aluno2))
    alert("Foi")
  }

  function LoadDataSession() {
    const loadAluno = sessionStorage.getItem("aluno2")
    setResultado2(JSON.parse(loadAluno))
  }

  return(
    <div>
      <h1>Save Load Data</h1>
      <h2>{JSON.stringify(Resultado1)}</h2>
      <button onClick={() => SaveDataLocal()}>Save Data Local</button>
      <button onClick={() => LoadDataLocal()}>Load Data Local</button>
      <br />
      <br />
      <h2>{JSON.stringify(Resultado2)}</h2>
      <button onClick={() => SaveDataSession()}>Save Data Sesssion</button>
      <button onClick={() => LoadDataSession()}>Load Data Session</button>
    </div>
  )
}

export default SaveLoadData