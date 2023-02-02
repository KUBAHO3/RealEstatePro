import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
    headers: {
    'X-RapidAPI-Key': '592473c06fmshd9dce45f67c5559p179c34jsn4b500d595192',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }    
    });
    return data;
}
