import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SidePanel from './components/SidePanel'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Login from './pages/login'
import CreatePost from './pages/CreatePost'
function App() {
  const [count, setCount] = useState(0)
  const [mode,setMode] = useState(0);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 0 ? 1 : 0));
  };


  return (

    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/signup' element={<Signup />}></Route>
    //   <Route path='/dashboard' element={<Dashboard />}></Route>
      
    //   <Route path='/login' element={<Login/>}></Route>
    // </Routes>
    

    <div className="flex flex-col">
      
      
      <div className="flex-1 flex">
        <SidePanel />
        
        <div className={`flex flex-col p-2 w-full backdrop-blur-2xl scroll-auto position relative ${mode === 1 ? "bg-black/50" : "bg-white text-black"}`}>
          <button 
            className={` p-1 rounded-[50%] h-10 w-10 place-self-end fixed top-6 right-6 z-10 shadow-lg ${mode==0?"bg-white":"bg-black"}`} 
            onClick={toggleTheme}
          >
            <img src={`${mode==0?"/icons/darkmode.png":"/icons/lightmode.png"}`} alt="" className='h-fit w-fit p-1' />
          </button>
            <Routes>
              <Route path="/" element={<Home uimode={mode}/>} />
              <Route path="/signup" element={<Signup uimode={mode}/>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login uimode={mode}/>} />
              <Route path="/createpost" element={<CreatePost uimode={mode}/>} />
            </Routes>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default App;