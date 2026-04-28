

export default function MeuAvatar({ nome, idade, foto, estilomusical, disciplina,livro}) {
  return (
    <div>
      <h1>{nome}</h1>
      <h2>{idade}</h2>
      <img src={foto} alt="Foto de perfil" />
      <p>Estilo musical: {estilomusical}</p>
      <p>Disciplina favorita: {disciplina}</p>
      <p>Livro: {livro}</p>
    </div>
  )
}