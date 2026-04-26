import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="font-display px-10 bg-[#F3F3F3] w-screen h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
