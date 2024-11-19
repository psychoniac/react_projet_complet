import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 mb-3 border-2 border-bottom customShadow">
      <div className="container flex justufy-between mx-auto">
        <Link href="/">Coucou</Link>
      </div>

    </nav>
  )
}
