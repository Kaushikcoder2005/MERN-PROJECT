import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // Important: toast styles

function App() {
  return (
    <>
      <Navbar />

      <div className='px-2.5 py-2 flex justify-center'>
        <Outlet />
      </div>

      {/* ToastContainer at the root level (only once) */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  )
}

export default App
