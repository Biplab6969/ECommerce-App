
import Header from "./components/Header"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"


function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" exact={true} element={<Home/>}  />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
