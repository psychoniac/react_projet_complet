import Card from "../components/Card";

export default function HomePage() {
  const allCharacters = [
    {
      image: "chevalier_feu.jpg",
      name: "Chevalier de feu",
      health: 50,
      magic: 30,
      power: 25,
    },
    {
      image: "magicienne.jpg",
      name: "RoseMary",
      health: 60,
      magic: 50,
      power: 35,
    },
  ];

  return (
    <>
      <h1 className="font-bold m-10 ">
        Coucou les fighters !!!
      </h1>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {allCharacters.map((oneCharacter, index) => (
          <Card key={index} character={oneCharacter} />
        ))}
      </div>
    </>
  );
}
