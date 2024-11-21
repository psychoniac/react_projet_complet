
import Buttons from "./Buttons";
import Statistiques from "./cardComponents/Statistiques";

export default function Card({character}) {
  console.log(character)  
  const allStat = [
        {stat: "Santé", value: character.health, unit:"PV"},
        {stat: "Magie", value: character.magic, unit:"PM"},
        {stat: "Attaque", value: character.power, unit:"ATK"},
    ]
  
    return (
    <div className="flex flex-col border-2 border-neutral-500 w-[250px] h-[400px] rounded-xl customShadow overflow-hidden">
      <div className="w-[250px] h-[250px] overflow-hidden">
        <img
          src={`src/assets/images/personnages/${character.image}`}
          alt={character.name}
          className="object-cover duration-300 hover:scale-105"
        />
      </div>
      <div className="p-2">
        <p className="text-xl text-center">{character.name}</p>
        <div className="flex flex-col">
            {
                allStat.map((oneStat, index) => (
                    <Statistiques key={index} stat={oneStat.stat} value={oneStat.value} unit={oneStat.unit}/>
                ))
            }

        </div>
        <div className="flex justify-between mt-2">
            <Buttons color="bg-red-500">ATTAQUER</Buttons>
            <Buttons color="bg-blue-500">DEFENDRE</Buttons>
        </div>
      </div>
    </div>
  );
}
