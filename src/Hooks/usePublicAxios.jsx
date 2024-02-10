import axios from 'axios';


const publicAxios = axios.create({
    baseURL : 'https://food-monkey-server-gray.vercel.app'
})

const usePublicAxios = () => {
  return publicAxios;
}

export default usePublicAxios