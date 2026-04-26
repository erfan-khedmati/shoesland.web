import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div>
        <h1 className="font-bold text-4xl text-blue-400">MainLayout</h1>
        <Outlet />
    </div>
  )
}

export default MainLayout