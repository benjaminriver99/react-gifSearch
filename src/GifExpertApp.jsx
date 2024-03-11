/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // setCategories( [...categories, "New player..."])
    // eslint-disable-next-line no-unused-vars
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="text-center">
      {/* Titulo... */}
      <h1 className="font-bold text-white text-4xl text-center pt-10 mb-10">
        Buscador de Gifs
      </h1>

      {/* Input */}
      <AddCategory
        onNewCategory={onAddCategory}
        // setCategories={setCategories}
      />

     {categories.map( (category) =>  (<GifGrid key={category} category={category}/>))}


      {/* Gif/List Items */}
      


    </div>
  );
};

export default GifExpertApp;
