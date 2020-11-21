import React from 'react';

const GifItem = ({img}) => {
  const {title,url} = img;
  return (  
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  );
}
 
export default GifItem;