import axios from "axios";

const BaseURL = "https://api.themoviedb.org/3/movie";
const ApiKey = "api_key=d49a7bbae0f4a5c8c3d4a937ab107653";

export const getList =  async (setState) => {
    await axios.get(`${BaseURL}/popular?${ApiKey}&language=pt-BR&page=20`)
    .then((response)=>{
        setState(response.data.results)
    }).catch((err)=>{
        console.log(err)
    })
};

// export const getSearch = async ((value, setState)) => {
//     await axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&${ApiKey}`)
//     .then((response)=>{
//         setState(response.data.results)
//     }).catch((err)=>{
//         console.log(err)
//     })
// };
