import { useState } from "react"

export default function Statistiques({stat, value, unit}) {
  const [statValue, setStatValue] = useState(value);
  
  
  return (
    <div className="flex justify-between">
    <p className="font-bold">{stat} :</p>
    <div className="flex items-center">
      <div onClick={()=>setStatValue(statValue - 2)} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="cursor-pointer"
        >
          <path
            fill="currentColor"
            d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 10V8h-2v4H8l4 4l4-4z"
          ></path>
        </svg>
      </div>
      <p>{statValue}{unit} </p>
      <div onClick={()=>setStatValue(statValue + 2)} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="cursor-pointer"
        >
          <path
            fill="currentColor"
            d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m-1-10v4h2v-4h3l-4-4l-4 4z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
  )
}
