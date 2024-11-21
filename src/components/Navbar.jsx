import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { text: "Accueil", path: "/" },
    { text: "Tous les persos", path: "/tous-les-persos" },
    {text: "Créer un personnage", path: "/creer-un-perso"}
  ];
  return (
    <nav className="p-4 mb-3 border-2 border-bottom customShadow">
      <div className="container flex justify-between mx-auto">
        <Link to="/">Cavernes des combattants</Link>
        <div className="flex gap-3">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-xl ${isActive ? "underline" : ""}`
              }
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
