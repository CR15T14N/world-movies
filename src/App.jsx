import './App.css'
import Home from './pages/Home'
import Movies from "./pages/Movies"
import Series from "./pages/Series"
import { Error } from "./pages/Error"
import {BrowserRouter,Routes, Route} from "react-router-dom";
import { DataContextProvider } from './context/DataContext'
import Presentation from './pages/Presentation'


function App() {

  return (
    <>
    <BrowserRouter>
    
    <DataContextProvider>
    <div className='main'>

    <Routes> 
      <Route path='/' element={<Presentation />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/movies' element={<Movies />}></Route>
      <Route path='/series' element={<Series />} ></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
    </div>
    </DataContextProvider>
    

    </BrowserRouter>
    </>
  )
}

export default App
