import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {

  return (
    <div className='dark:bg-slate-800 dark:text-white'>
      <Header />

      <main className="p-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App
