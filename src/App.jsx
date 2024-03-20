import './App.css'
import NavBar from './Componants/DaysiNav/NavBar/NavBar'
import LineChart from './Componants/LineChart/LineChart'
import Phones from './Componants/Phones/Phones'
import PriceOptions from './Componants/PriceOptions/PriceOptions'
// import DaisyNav from './Componants/DaysiNav/DaisyNav'

function App() {

  return (
    <>

      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className='text-4xl'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
