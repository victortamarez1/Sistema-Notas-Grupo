import axios from 'axios';


const URL = 'http://127.0.0.1:8000/api/ratings/';

//GET : PARA OBTENER LA LISTA DE RATING
const getRating = async () => {
     try{
        const response = await axios.get(URL);
        return response.data;
     }catch(err){
        console.error('Error al obtener El get');
         throw err;
     }
}

// POST: ´PARA AGREGAR NUEVO RATING
const postRating = async (rating) => {
   try{
      const response = await axios.post(URL, rating);
      return response.data;
   }catch(err){
      console.error('Error en el post');
      throw err;
   }
}

//PUT: PARA EDITAR UN RATING
const putRating = async (id, rating) => {
  try{
   const response = await axios.put(`${URL}${id}`, rating);
   return response.data;
  }catch(err){
   console.error('Error en el put');
   throw err;
  }
}

const deleteRating = async (id) => {
   try{
      const response = await axios.delete(`${URL}${id}/`);
      return response.data;
   }catch(err){
      console.error('Error en el delete');
      throw err;
   }
}

export {getRating, postRating, putRating, deleteRating};