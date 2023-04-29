import axios from 'axios'

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmJmODQ2NTFmMDgzNWQ2Mjg4NDE1ZDdlZDBlZDg4MCIsInN1YiI6IjY0MWQ2YTJiZTBlYzUxMDBiODVhYzhhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xswyOg14ElI1PrAL6sJA5hWwy8qUmoyFe5dtRrFkDU';

const headers = {
  Authorization: 'bearer ' + TMDB_TOKEN, 
  'Content-type' : 'application/json'
}


export const fetchDataFromApi = async (url, params) => {
  try{
    //создаём и передаём полученный результат.  
    const {data} = await axios.get(BASE_URL + url, {
          headers,
          params
    })
    return data; 
  }
  catch(err){
    console.log(err)
    return err;
  }
}