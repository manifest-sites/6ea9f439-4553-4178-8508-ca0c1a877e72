import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Monetization from './components/monetization/Monetization'
import CardTrick from './components/CardTrick'
import CoinTrick from './components/CoinTrick'
import MindReading from './components/MindReading'
import Navigation from './components/Navigation'
import { getRouterBasename } from './utils/routerUtils'

function App() {

  return (
    <Monetization>
      <Router basename={getRouterBasename()}>
        <Navigation />
        <Routes>
          <Route path="/" element={<CardTrick />} />
          <Route path="/card-trick" element={<CardTrick />} />
          <Route path="/coin-trick" element={<CoinTrick />} />
          <Route path="/mind-reading" element={<MindReading />} />
        </Routes>
      </Router>
    </Monetization>
  )
}

export default App