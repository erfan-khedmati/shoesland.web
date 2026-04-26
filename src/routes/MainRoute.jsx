import {Routes, Route} from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
function MainRoute() {
  return (
    <Routes>
        <Route element={<MainLayout/>}>
            <Route index path="/" element={<Home />} />
        </Route>
    </Routes>
  )
}

export default MainRoute