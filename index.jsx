import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, NavLink, Route} from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Vans from "./components/Vans"
/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  return (
    <BrowserRouter>
     <div class="app"><nav> 
          <NavLink to="/">#VANLIFE</NavLink>
          <div>
            <NavLink to="about">About</NavLink>
            <NavLink to="/vans">Vans</NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}>
            #VANLIFE
          </Route>
          <Route path="about" element={<About/>}>
            About
          </Route>
          <Route path="/vans" element={<Vans />} />
        </Routes>
        <footer>Ⓒ 2022 #VANLIFE</footer>
      </div>
    </BrowserRouter>
    
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);