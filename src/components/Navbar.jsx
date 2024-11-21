import { Link } from "react-router-dom";

export default function Navbar() {

  const navItems = [
    {text: "Accueil", path : "/"},
    {text: "Tous les persos", path:"/tous-les-persos"}
  ]
  return (
    <nav className="p-4 mb-3 border-2 border-bottom customShadow">
      <div className="container flex justufy-between mx-auto">
        <Link to="/">Cavernes des combattants</Link>
        <div className="flex gap-3">
          {navItems.map((item, index) => (
            <Link to={item.path}>{item.text}</Link>
          ))}
        </div>

      </div>

    </nav>
  )
}
