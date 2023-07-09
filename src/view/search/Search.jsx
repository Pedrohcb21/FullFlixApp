import { useEffect, useState } from "react";
import {  SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import axios  from "axios";
import { BsStar } from "react-icons/bs";


export const Search = ({ navigation, route }) => {
    
    const [value, setValue] = useState(route.params.text)

    const [movies, setMovies] = useState([]);

    const Tohome = () => {
        navigation.navigate("Home");
    }

    const ApiKey = "api_key=d49a7bbae0f4a5c8c3d4a937ab107653";
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const getSearch = async (value, setState) => {
        await axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&${ApiKey}&language=pt-BR`)
        .then((response)=>{
            setState(response.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    };

    useEffect(()=>{
        getSearch(value, setMovies)
    },[])
    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => Tohome()}>
                <Text style={styles.text}>Inicio</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Resultados para a pesquisa:</Text>

            {movies.map((movie)=>{
                return (
                    <TouchableOpacity style={styles.movieCard} key={movie.id}>
                        <Image 
                            source={{uri:`${imagePath}${movie.poster_path}`}}
                            style={{width: 200, height: 200}}
                        />

                        <Text style={styles.text}>{movie.title}</Text>
                        <Text style={styles.text}><BsStar/><Text style={styles.text}>{movie.vote_average}</Text></Text>
                    </TouchableOpacity> 
                )
            })}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    movieCard: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 400,
        gap:20,
        borderWidth: 2,
        borderColor: 'red',
        marginTop: 20,
        borderRadius: 12,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    input: {
        color: '#fff',
        borderWidth: 2,
        borderRadius: 10 ,
        borderColor: '#fff',
        padding: 10,
        margin: 6,
        width: '80%',
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        color: '#fff',
        borderRadius: 10,
        padding: 6,
        width: 100,
        height: 40,
        textAlign: 'center',
        backgroundColor: 'red',
        marginTop: 6
    },
})