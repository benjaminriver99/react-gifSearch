/* eslint-disable react/prop-types */
import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = e => { setInputValue(e.target.value)}

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1)return;

        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue('');
        
    }

  return (

    <form onSubmit={onSubmit} className="inline">
    <input
    value={inputValue}
    onChange={onInputChange}
    type="text"
    placeholder="Buscar gifs"
    className="rounded-md border-solid border-2 border-green-900 shadow-xl m-5"
    />

    {/* <button 
      className="bg-green-800 hover:bg-green-900 rounded-md shadow-md font-bold ml-5 pl-2 pr-2 pt-1 pb-1  text-white mb-10 "
      >Agregar
    </button>  */}

    </form>


  )
}

export default AddCategory