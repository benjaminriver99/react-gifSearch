// import { getGifs } from "./helpers/getGifs";
import GifItem from "./GifItem";
import useFetchGifs from "./hooks/useFetchGifs";

const GifGrid = ({ category }) => {

  const { images, isLoading} = useFetchGifs(category);

  console.log(images, isLoading);

  return (
    <>
      <h3 className="text-white font-bold text-3xl mb-5">{category}</h3>

      {
        isLoading && ( <h2>Cargando...</h2>)
      }
      <div className="grid gap-2 grid-cols-3 grid-rows-3">
        
      {
      images.map( (image) => (
        <GifItem key={image.id}
                 {...image}

        />

        ))
      }
    </div>

    </>
    )
  }
export default GifGrid;
