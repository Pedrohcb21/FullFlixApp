import { getList } from "../../api/api";

import { homeStyles } from "../home/homeStyle";
import { AntDesign } from "@expo/vector-icons";

import { useEffect, useState } from "react";

import { SafeAreaView, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";

export const Home = ({ navigation }) => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getList(setMovies);     
    }, []);

    const [search, setSearch] = useState("");
    const GoToSearch = () => {
        navigation.navigate("Search", {
            text: search
        })
        setSearch("")
    };

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

    const imagePath = 'https://image.tmdb.org/t/p/w500';

    return (    
        <SafeAreaView>
            <ScrollView contentContainerStyle={homeStyles.container}>
                <TextInput style={homeStyles.input} value={search} placeholder="Faça busca por títulos..." onChangeText={(e)=>setSearch(e)}></TextInput>
                
                <TouchableOpacity style={homeStyles.button} onPress={()=>GoToSearch()}>
                    <Text style={homeStyles.text}>Buscar</Text>
                </TouchableOpacity>

                <Text style={homeStyles.h1}>Filmes populares:</Text>

                {movies.map((movie) =>{
                    return (
                        <TouchableOpacity key={movie.id} style={homeStyles.movieCard} onPress={()=>setMovieId(movie.id)}>
                            <Image 
                                source={{uri:`${imagePath}${movie.poster_path}`}}
                                style={homeStyles.image}
                            />

                        <Text style={homeStyles.text}>{movie.title}</Text>

                        <Text style={homeStyles.text}> 
                            {<AntDesign name="staro" size={24} color="black" />} 
                            <Text style={homeStyles.text}> {movie.vote_average}</Text> 
                        </Text>
                    </TouchableOpacity> 
                );
            })}
            </ScrollView>
        </SafeAreaView>
    );
}