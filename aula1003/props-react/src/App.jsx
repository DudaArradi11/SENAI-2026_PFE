import './App.css'
import MeuAvatar from './componentes/meuAvatar.jsx'
import imagem from './assets/img/fotodeperfil.jpg'

function App() {
  return (
    <>
      <MeuAvatar
        nome="Duda"
        idade="17 anos"
        foto={imagem}
        estilomusical="Gospel"
        disciplina="Língua Portuguesa"
        livro='Até que nada mais importe'
      />
    </>
  )
}

export default App