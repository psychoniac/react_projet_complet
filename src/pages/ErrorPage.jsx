import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
        <h1 className="text-3xl text-center">Error Page</h1>
    <Link to='/'>Revenir a la homepage</Link>
    </div>
  )
}
