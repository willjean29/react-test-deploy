import React, {Fragment} from 'react'
import GifItem from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs';
const GifGrid = ({category}) => {
  const {data, loading} = useFetchGifs(category);

  return (  
    <Fragment>
      <h3>{category}</h3>
      {loading && <p>Laoding...</p> }
      <div className="card-grid">
        {data.map(img => (
          <GifItem
            key={img.id}
            img={img}
          />
        ))}
      </div>
    </Fragment>

  );
}
 
export default GifGrid;