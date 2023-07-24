// import axios from 'axios';
// const API_KEY='436c6b40148561b4930d7c3e646eae67';
// const  API_URL='http://api.openweathermap.org/data/2.5/weather';
//  export const getWeather = async(city,country)=>{
//   try{
//     let response = await axios.get(`${API_URL} ? q= ${city}, ${country},&appid ${API_KEY}&units=metric `);
//     return response.data;
//   }catch(error){
//    console.log('Error while calling the api', error.message);
//     return error.response;
//   }
// }
import axios from 'axios';

const API_KEY = '8d2a110b6ad468ae1a0e459757cf659d';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response;
    }
  }