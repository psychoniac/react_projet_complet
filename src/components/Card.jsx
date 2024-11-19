
export default function Card() {
  return (
    <div className="flex flex-col border-2 border-neutral-500 w-[250px] h-[400px] rounded-xl customShadow overflow-hidden">
        <div className="w-[250px] h-[250px] overflow-hidden">
            <img src="src/assets/images/personnages/chevalier_feu.jpg" alt="avatar chevalier" className="object-cover duration-300 hover:scale-105" />
        </div>
        <div className="p-2">
            <p className="text-xl text-center">Chevalier de feu</p>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <p className="font-bold">Santé :</p>
                    <div className="flex items-center">
                        <div className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 10V8h-2v4H8l4 4l4-4z"></path></svg></div>
                        <p>25</p>
                        <div className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m-1-10v4h2v-4h3l-4-4l-4 4z"></path></svg></div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="font-bold">Magie :</p>
                    <div className="flex items-center">
                        <div className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 10V8h-2v4H8l4 4l4-4z"></path></svg></div>
                        <p>25</p>
                        <div className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m-1-10v4h2v-4h3l-4-4l-4 4z"></path></svg></div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="font-bold">Puissance :</p>
                    <div className="flex items-center">
                        <div className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 10V8h-2v4H8l4 4l4-4z"></path></svg></div>
                        <p>25</p>
                        <div className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m-1-10v4h2v-4h3l-4-4l-4 4z"></path></svg></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-2">
                <button className="px-2 py-1 bg-blue-500 border-2 border-neutral-400 rounded-xl hover:border-neutral-500 hover:opacity-90 duration-300">ATTAQUER</button>
                <button className="px-2 py-1 bg-red-700 border-2 border-neutral-400 rounded-xl hover:border-neutral-500 hover:opacity-90 duration-300">DEFENDRE</button>
            </div>

        </div>
    </div>
  )
}
