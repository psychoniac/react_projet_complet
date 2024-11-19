import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="flex flex-col min-h-svh">
      <Navbar />
      <section className="flex-grow container p-2">
        <h1 className="font-bold rounded-xl bg-neutral-300 px-3 py-5 w-fit m-10">
          Coucou les fighters !!!
        </h1>
        <div className="flex items-center justify-center">
        <Card />
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default App;
