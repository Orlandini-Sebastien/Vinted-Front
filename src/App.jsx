import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import ProductPage from './pages/ProductPage'
import { useState } from 'react'


function App() {
	const [data, setData] = useState([])
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage data={data} setData={setData} />} />

				<Route path="/OffersPage/:id" element={<ProductPage data={data} />} />
			</Routes>
		</Router>
	)
}

export default App
