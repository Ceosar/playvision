import { Route, Routes } from "react-router-dom"
import ErrorPage from "./components/errorPage/ErrorPage"
import MainPage from "./components/mainPage/MainPage"
import Play from "./components/general/play/Play"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/play" element={<Play/>} />
      </Routes>
    </>
  )
}

export default App
