import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/Detail'
import ProductPage from './admin/Product'
import AddProductPage from './admin/Addproduct'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:3000/products`)
    .then(res =>res.json())
    .then(data => setProducts(data))
  },[])
  console.log(products);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage products={products} />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/admin/product' element={<ProductPage />} />
        <Route path='/admin/product/add' element={<AddProductPage />} />
       
      </Routes>
    </>
  )
}

export default App
