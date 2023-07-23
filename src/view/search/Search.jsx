import { getSearch } from "../../api/api";

import { searchStyles } from "./searchStyle";
import { AntDesign } from "@expo/vector-icons";

import { useEffect, useState } from "react";

import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView } from "react-native";

export const Search = ({ navigation, route }) => {
    
    const [value, setValue] = useState(route.params.text)

    const [movies, setMovies] = useState([]);

    const Tohome = () => {
        navigation.navigate("Home");
    }

    const imagePath = 'https://image.tmdb.org/t/p/w500';

    useEffect(()=>{
        getSearch(value, setMovies)
    },[])

    const [movieId, setMovieId] = useState(null);
    const GoToDetails = () => {
        if (movieId != null){
            navigation.navigate("Details", {
                text: movieId
            })
        }
    };
    useEffect(() => {
        GoToDetails()
    }, [movieId]);
    
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={searchStyles.container}>
                <TouchableOpacity style={searchStyles.button} onPress={() => Tohome()}>
                    <Text style={searchStyles.text}>Inicio</Text>
                </TouchableOpacity>

                <Text style={searchStyles.h1}>Resultados para a sua pesquisa:</Text>

                {movies.map((movie)=>{
                    return (
                        <TouchableOpacity style={searchStyles.movieCard} key={movie.id} onPress={()=>setMovieId(movie.id)}>
                            <Image 
                                source={{uri:`${imagePath}${movie.poster_path}`}}
                                style={searchStyles.image}
                            />

                            <Text style={searchStyles.text}>{movie.title}</Text>
                            <Text style={searchStyles.text}>
                                {<AntDesign name="staro" size={24} color="black" />}
                                <Text style={searchStyles.text}>{movie.vote_average}</Text>
                            </Text>
                        </TouchableOpacity> 
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
}