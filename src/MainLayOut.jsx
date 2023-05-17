import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
    </>
  )
}

export default App
