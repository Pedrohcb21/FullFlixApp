import { Text } from "react-native";

import axios from "axios";
import { useEffect, useState } from "react";


export const Details = ({ route }) => {
    
    const [value, setValue] = useState(route.params.text)
    const [movieDetail, setMovieDetail] = useState();

    const ApiKey = "api_key=d49a7bbae0f4a5c8c3d4a937ab107653";

    const getDetails = async (value, setState) => {
        console.log(value)
        await axios.get(`https://api.themoviedb.org/3/movie/${value}?${ApiKey}&language=pt-BR`)
        .then((response)=>{
            setState(response.data)
            console.log(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    };

    useEffect(()=>{
        getDetails(value, setMovieDetail)
    },[]);
    
    return (
        <Text>Welcome to details</Text>
    );
}