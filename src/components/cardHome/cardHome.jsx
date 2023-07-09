import { useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { getList } from "../../api/api";

export function CardHome({ navigation }) {
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const [movies, setMovies] = useState([]);
    const [movieId, setMovieId] = useState("");

    useEffect(() => {
        getList(setMovies);        
    },[]);

    const GoToDetails = () => {
        navigation.navigate("Details", {
            text: movieId
        })
    }

    return (
        <SafeAreaView>
            {movies.map((movie) =>{
                return (
                    <TouchableOpacity key={movie.id} onPress={()=>GoToDetails(console.log(movie.id))} >
                        <Text>{movie.title}</Text>
                        <Text><BsStar/></Text>
                        <Text>{movie.vote_average}</Text>
                    </TouchableOpacity>   
                );
            })}
        </SafeAreaView>    
    );
};

                       {/* <img 
                        src={`${imagePath}${movie.poster_path}`} 
                        alt={`Imagem do filme ${movie.title}`}>   
                        </img> */}