import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 py-4">
            <span className="text-2xl">🎩</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Magic Tricks Academy
            </h1>
          </div>
          <div className="flex space-x-1">
            <Link 
              to="/card-trick" 
              className={`py-3 px-4 rounded-lg transition-all duration-300 ${
                location.pathname === '/card-trick' 
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-700/50'
              }`}
            >
              🎴 Card Tricks
            </Link>
            <Link 
              to="/coin-trick" 
              className={`py-3 px-4 rounded-lg transition-all duration-300 ${
                location.pathname === '/coin-trick' 
                  ? 'bg-emerald-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-300 hover:text-white hover:bg-emerald-700/50'
              }`}
            >
              🪙 Coin Magic
            </Link>
            <Link 
              to="/mind-reading" 
              className={`py-3 px-4 rounded-lg transition-all duration-300 ${
                location.pathname === '/mind-reading' 
                  ? 'bg-red-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-300 hover:text-white hover:bg-red-700/50'
              }`}
            >
              🔮 Mind Reading
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation