import { getDetails } from "../../api/api";

import { detailStyle } from "./detailsStyle";
import { FontAwesome5, MaterialIcons, Fontisto, Feather, AntDesign } from "@expo/vector-icons";

import { useEffect, useState } from "react";

import { SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

export const Details = ({ route, navigation }) => {
    
    const [value, setValue] = useState(route.params.text)

    const [movie, setMovie] = useState();
    useEffect(()=>{
        getDetails(value, setMovie)
    }, []);

    const dolar = (number) => {
        return number.toLocaleString("en-us", {
            style: "currency",
            currency: "USD",
        });
    };

    const Tohome = () => {
        navigation.navigate("Home");
    }

    const imagePath = 'https://image.tmdb.org/t/p/w500';

    return (
        <SafeAreaView>
            {movie && (
                <ScrollView contentContainerStyle={detailStyle.card}>
                    <Image 
                        source={{uri:`${imagePath}${movie.poster_path}`}}
                        style={detailStyle.image}
                    />

                    <Text style={detailStyle.text}>
                        <Text> {<MaterialIcons name="subtitles" size={20} color="red" />} Título: </Text> 
                        {movie.title} 
                    </Text>

                    <Text style={detailStyle.text}>
                        <Text> {<AntDesign name="staro" size={20} color="red" />} Nota: </Text> 
                        {movie.vote_average} 
                    </Text>

                    <Text style={detailStyle.text}> 
                        <Text> {<AntDesign name="filetext1" size={20} color="red" />} Sinopse: </Text>
                        {movie.overview}  
                    </Text>

                    <Text style={detailStyle.text}>
                        <Text> {<Feather name="clock" size={20} color="red" />} Duração: </Text> 
                        {movie.runtime} minutos
                    </Text>

                    <Text style={detailStyle.text}>
                        <Text> {<Fontisto name="date" size={20} color="red" />} Data de lançamento: </Text> 
                        {movie.release_date} 
                    </Text>

                    <Text style={detailStyle.text}>
                        <Text> {<FontAwesome5 name="money-check-alt" size={20} color="red" />} Orçamento: </Text> 
                        {dolar(movie.budget)} 
                    </Text>

                    <Text style={detailStyle.text}>
                        <Text> {<MaterialIcons name="attach-money" size={20} color="red" />} Receita: </Text> 
                        {dolar(movie.revenue)} 
                    </Text>

                    <TouchableOpacity style={detailStyle.button} onPress={() => Tohome()}>
                        <Text style={detailStyle.textBtn}>Inicio</Text>
                    </TouchableOpacity>  
                </ScrollView>
            )}
        </SafeAreaView>
    );
}