import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="font-display bg-[#F3F3F3]">
      <Header />
      <main className="px-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
