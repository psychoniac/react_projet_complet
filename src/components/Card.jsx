import { useState } from "react";
import Statistiques from "./cardComponents/Statistiques";

export default function Card() {
    const allStat = [
        {stat: "Santé", value: "50", unit:"PV"},
        {stat: "Magie", value: "15", unit:"PM"},
        {stat: "Attaque", value: "25", unit:"ATK"},
    ]
  
    return (
    <div className="flex flex-col border-2 border-neutral-500 w-[250px] h-[400px] rounded-xl customShadow overflow-hidden">
      <div className="w-[250px] h-[250px] overflow-hidden">
        <img
          src="src/assets/images/personnages/chevalier_feu.jpg"
          alt="avatar chevalier"
          className="object-cover duration-300 hover:scale-105"
        />
      </div>
      <div className="p-2">
        <p className="text-xl text-center">Chevalier de feu</p>
        <div className="flex flex-col">
            {
                allStat.map((oneStat, index) => (
                    <Statistiques key={index} stat={oneStat.stat} value={oneStat.value} unit={oneStat.unit}/>
                ))
            }

        </div>
        <div className="flex justify-between mt-2">
          <button className="px-2 py-1 bg-blue-500 border-2 border-neutral-400 rounded-xl hover:border-neutral-500 hover:opacity-90 duration-300">
            ATTAQUER
          </button>
          <button className="px-2 py-1 bg-red-700 border-2 border-neutral-400 rounded-xl hover:border-neutral-500 hover:opacity-90 duration-300">
            DEFENDRE
          </button>
        </div>
      </div>
    </div>
  );
}
