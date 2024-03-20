import './App.css'
import NavBar from './Componants/DaysiNav/NavBar/NavBar'
import LineChart from './Componants/LineChart/LineChart'
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
    </>
  )
}

export default App
