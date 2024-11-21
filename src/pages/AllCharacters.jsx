import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function AllCharacters() {
  const url = "https://la-taverne.ducompagnon.fr/api/personnages";

  const [characters, setCharacters] = useState([]);
  const [refreshCharacter, setRefreshCharacter] = useState(0);
  useEffect(() => {
    fetchCharacters();
  }, [refreshCharacter]);

  async function fetchCharacters() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Problème de connexion au http : ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setCharacters(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  }

  return (
    <div>
      <h1 className="text-4xl mb-6 text-center">Tous les personnages</h1>
      <button onClick={() => setRefreshCharacter(refreshCharacter + 1)} className="cursor-pointer bg-black text-white">CLICK ME</button>
      <div className="flex justify-center flex-wrap gap-8">
      {characters.map((oneCharacter) => (
        <Card key={oneCharacter.id} character={oneCharacter}/>
      ))}
      </div>
    </div>
  );
}
