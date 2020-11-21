import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
   setTimeout(() => {
    getGifs(category)
    .then(images => setState({
      data: images,
      loading: false
    }))
   }, 1500);
  }, [category]);
  return state;
}
 

