import { useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import { useDispatch } from "react-redux"
import { fetchUser } from "../features/auth/AuthSlice"

function MainRoute() {
  const dispatch = useDispatch();
  // check user authentication
  useEffect(()=> {
    dispatch(fetchUser());
  }, [])

  return (
    <Routes>
        <Route element={<MainLayout/>}>
            <Route index path="/" element={<Home />} />
        </Route>
    </Routes>
  )
}

export default MainRoute