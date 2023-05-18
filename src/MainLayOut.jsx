import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import { Toaster } from "react-hot-toast"
import Footer from "./Components/Footer/Footer"


function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-[1200px] mx-auto">
        <Outlet />
      </div>
      <Toaster />
      <Footer />
    </>
  )
}

export default App
