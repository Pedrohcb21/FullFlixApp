import { SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { getList } from "../../api/api";

export const Home = ({ navigation }) => {
    const [search, setSearch] = useState();

    const GoToSearch = () => {
        navigation.navigate("Search", {
            text: search
        })
    }

    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const [movies, setMovies] = useState([]);
    const [movieId, setMovieId] = useState("");

    useEffect(() => {
        getList(setMovies);        
    },[]);


    return (    
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input} value={search} placeholder="Pesquisar..." onChangeText={(e) => setSearch(e)}></TextInput>
            <TouchableOpacity style={styles.button} onPress={() => GoToSearch()}>
                <Text style={styles.text}>Procurar</Text>
            </TouchableOpacity>

        
            {movies.map((movie) =>{
                return (
                    <TouchableOpacity style={styles.movieCard} key={movie.id} onPress={ ()=> setMovieId(movie.Id)}>
                        <Image 
                            source={{uri:`${imagePath}${movie.poster_path}`}}
                            style={{width: 200, height: 200}}
                        />

                        <Text style={styles.text}>{movie.title}</Text>
                        <Text style={styles.text}><BsStar/><Text style={styles.text}>{movie.vote_average}</Text></Text>
                    </TouchableOpacity>  
                );
            })}

            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
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