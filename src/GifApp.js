import React, {Fragment, useState} from 'react';
import GifSearch from './components/GifSearch';
import GifGrid from './components/GifGrid';
const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (  
    <Fragment>
      <h1>Gif App</h1>
      <GifSearch setCategories={setCategories}/>
      <hr/>
      {categories.map(category => (
        <GifGrid 
          key={category}
          category={category}
        />
      ))}
    
    </Fragment>
  );
}
 
export default GifApp;