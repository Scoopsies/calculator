import { useState } from "react"
import Buttons from "./Componenets/Buttons"


function App() {
  const [screen, setScreen] = useState([])
  console.log(eval('7895.25 + 985.20'))
  return (
    <>
      <h3>{screen}</h3>
      <Buttons screen={screen} setScreen={setScreen}/>
    </>
  )
}

export default App;
