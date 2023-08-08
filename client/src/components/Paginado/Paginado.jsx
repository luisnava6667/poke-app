export const Paginado = (charactersPerPage, allPokemons, paginado) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(allPokemons / charactersPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className=''>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button className='' onClick={() => paginado(number)} key={number}>
            {number}
          </button>
        ))}
    </div>
  )
}
