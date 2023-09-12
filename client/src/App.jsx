import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import Footer from "./components/Footer"
import Header from "./components/Header"
import themeStore from "./store/theme"


function App() {
  const theme = themeStore((state) => state)
  console.log(theme)

  return (
    <div className='dark:bg-slate-800 dark:text-white'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme.mode}
      />

      <Header />

      <main className="p-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App
