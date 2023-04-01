import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

// JSX: JavaScript Extension (XML)
const App = () => {

  const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}

  const textoDoRotulo = 'Nome:'

  const obterTextoDoBotao = () => "Enviar"

  const onClique = () => alert('clicou')

  return <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
    <label
      className='rotulo' 
      htmlFor='nome' 
      style={{display: 'block', marginBottom: 4}}>
      {textoDoRotulo}
    </label>
    <input 
      type="text" 
      id="nome"
      style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', width: '100%', borderRadius: 8, boxSizing: 'border-box'}} />
      <button 
        style={estilosBotao}
        onClick={() => onClique()}>
        {obterTextoDoBotao()}
      </button>
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)