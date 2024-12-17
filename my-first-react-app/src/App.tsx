
import './App.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Info from './components/Info'

function App() {

  return (
    <>
      <Header logoText="My First React App" />
      <Welcome greeting="Hello" />
      <Info firstname="Yi-En" lastname="Tsai" age={27} isStudent={true} />
    </>
  )
}

export default App
