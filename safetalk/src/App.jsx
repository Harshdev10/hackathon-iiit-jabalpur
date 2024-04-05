import React from 'react'
import landingPage from './components/landingPage/landingPage'
import loginPage from './components/loginPage/loginPage'
import signupPage from './components/signupPage/signupPage'
import './App.css'

function App() {


  return (
      <>  
    <div className="App">
      <header className="App-header">
        <h1>SafeTalk</h1>
      </header>
      <landingPage />
      <loginPage />
      <signupPage />
      </div>
    </>
  )
}

export default App
