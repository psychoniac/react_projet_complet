import {useState, useEffect} from 'react'

export default function ImagesInput({image, setImage}) {
    const url = "https://la-taverne.ducompagnon.fr/api/images";
    const [images, setImages] = useState([]);
    useEffect(() => {
      fetchImages();
    }, []);
  
    async function fetchImages() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erreur http, status : ${response.status}`);
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error(
          "Une erreur a interrompu la récupération des classes :",
          error
        );
      }
    }
  
    return (
    <div>
         <label htmlFor="image" className="mb-2 block">
    Avatar
      </label>
      <select
        name="image"
        id="image"
        onChange={(e) => setImage(e.target.value)}
        required
        className="border border-gray-300 rounded w-full p-2 mb-4"
      >
        <option value="">Choisissez un avatar</option>
        {images.map((image, index) => (
          <option key={index} value={image.url}>
            {" "}
            {image.name}
          </option>
        ))}
      </select>

    </div>
  )
}
