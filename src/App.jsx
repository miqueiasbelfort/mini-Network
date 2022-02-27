import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { GlobalStyles } from './styles/GlobalStyled'

function App() {

  function popUp(){
      alert("Bell")
  }
  function isLiked(){
    return "#ff0000"
  }

  return (
    <div className="App">
      <GlobalStyles />
      <Header popup={popUp}/>
      <Main cor={isLiked}/>
    </div>
  )
}

export default App
