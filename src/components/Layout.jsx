import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <main className="flex flex-col min-h-svh">
        <Navbar />
        <section className="flex-grow container p-2">
            {/*c'est ici que les pages enfant seront rendu*/}
            <Outlet />
        </section>
        <Footer />
      </main>
    </div>
  );
}
