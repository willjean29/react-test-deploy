import React, {useState} from 'react';

const GifSearch = ({setCategories}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputValue.length > 2){
      setCategories(categories => ([
        inputValue,
        ...categories
      ]));
      setInputValue('');
    }

  }

  return (  
    <form
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        name="search"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}
 
export default GifSearch;