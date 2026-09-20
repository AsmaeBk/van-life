import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Vans from "./components/Vans"
import VanDetail from "./components/VanDetail"
import Rentals from "./components/Rentals"
import NotFound from "./components/NotFound"
import "./server"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <NavLink to="/" end>#VANLIFE</NavLink>
          <div>
            <NavLink to="about">About</NavLink>
            <NavLink to="/vans">Vans</NavLink>
            <NavLink to="/rentals">My Rentals</NavLink>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer>&copy; 2022 #VANLIFE</footer>
      </div>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />)
