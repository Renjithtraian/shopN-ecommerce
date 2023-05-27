
import './App.scss'
import Layout from './components/Pages/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Cart from './components/Pages/Cart'
import Login from './components/Pages/Login'
import Products from './components/Pages/Products'
import Details from './components/Pages/Details'
import AppContextWrapper from './components/Context/AppContext'

function App() {

  return (
    <>
    <AppContextWrapper>
     <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/products' element={<Products/>}/> */}
        <Route path='/:id' element={<Details/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </Layout>
     </AppContextWrapper>
    </>
  )
}

export default App
