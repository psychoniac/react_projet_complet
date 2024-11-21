import { useEffect, useState } from "react";

export default function SideInput({side, setSide}) {
  const url = "https://la-taverne.ducompagnon.fr/api/classes";
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchSides();
  }, []);

  async function fetchSides() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erreur http, status : ${response.status}`);
      }
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error(
        "Une erreur a interrompu la récupération des classes :",
        error
      );
    }
  }

  return (
    <div>
      <label htmlFor="side" className="mb-2 block">
        Côte de la force{" "}
      </label>
      <select
        name="side"
        id="side"
        onChange={(e) => setSide(e.target.value)}
        required
        className="border border-gray-300 rounded w-full p-2 mb-4"
      >
        <option value="">Choisissez un côté</option>
        {classes.map((classes) => (
          <option key={classes.id} value={classes.side}>
            {" "}
            {classes.side}
          </option>
        ))}
      </select>
    </div>
  );
}
