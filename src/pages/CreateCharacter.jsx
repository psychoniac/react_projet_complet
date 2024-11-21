import { useState } from "react";
import SideInput from "../components/formComponents/SideInput";
import ImagesInput from "../components/formComponents/ImagesInput";

export default function CreateCharacter() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [health, setHealth] = useState("");
  const [magic, setMagic] = useState("");
  const [power, setPower] = useState("");
  const [side, setSide] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    // creation d'un personnage
    const newCharacter = {
        name,
        image,
        health: parseInt(health),//convertir en entier
        magic: parseInt(magic),
        power: parseInt(power),
        side
    }
    setName("");
    setImage("");
    setHealth("");
    setMagic("");
    setPower("");
    setSide("");
  }

  return (
    <div>
      <h1 className="text-4xl mb-6 text-center">Création d'un personnage</h1>

      <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded">
        <div>
          <label htmlFor="name" className="mb-2 block">
            Nom :{" "}
          </label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
        </div>
        <div>
       <ImagesInput image={image} setImage={setImage}/>
        </div>
        <div>
          <label htmlFor="health" className="mb-2 block">
            Santé :{" "}
          </label>
          <input
            type="number"
            id="health"
            required
            value={health}
            onChange={(e) => setHealth(e.target.value)}
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
        </div>
        <div>
          <label htmlFor="magic" className="mb-2 block">
            Magie :{" "}
          </label>
          <input
            type="number"
            id="magic"
            required
            value={magic}
            onChange={(e) => setMagic(e.target.value)}
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
        </div>
        <div>
          <label htmlFor="power" className="mb-2 block">
            Puissance :{" "}
          </label>
          <input
            type="number"
            id="power"
            required
            value={power}
            onChange={(e) => setPower(e.target.value)}
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
        </div>
        <div>
         <SideInput side={side} setSide={setSide}/>
        </div>
        <button
          type="submit"
          className="p-2 rounded bg-blue-500 text-white hover:opacity-90 duration-300"
        >
          Créer le personnage
        </button>
      </form>
    </div>
  );
}
