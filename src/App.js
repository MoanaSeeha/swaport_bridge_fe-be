import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout'
import Liquidity from './pages/Liquidity'
import MainPage from './pages/MainPage'
import Stable from './pages/Stable'
import Swap from './pages/Swap'

// import logo from './logo.svg'

function App() {
  return (
    // <div className="App">

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/stable" element={<Stable />} />
          <Route exact path="/swap" element={<Swap />} />
          <Route exact path="/liquidity" element={<Liquidity />} />
        </Routes>
      </Layout>
    </BrowserRouter>

    // </div>
  )
}

export default App
