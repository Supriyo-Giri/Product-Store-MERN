import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <div className='main-container'>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <HomePage /> }/>
          <Route path='/create' element={ <CreatePage /> }/> 
          <Route path='/about' element={ <AboutPage/> }/>
        </Routes>
        <ToastContainer/>
      </div>
    </>
  )
}

export default App
 