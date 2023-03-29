import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import "./RootLayout.css";
import Footer from "./Footer";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
