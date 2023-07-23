import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        padding: 10,
        paddingBottom: 60, 
    },
    movieCard: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 400,
        gap:20,
        padding: 10,
        borderWidth: 2,
        borderColor: 'red',
        marginTop: 20,
        borderRadius: 12,
    },
    image: {
        width: '90%', 
        height: 250,
        resizeMode: 'contain',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'red',
    }, 
    text: {
        color: '#fff',
        fontSize: 20,
    },
    h1: {
        color: '#fff',
        fontSize: 30,
        marginTop: 15,
        marginBottom: 15,   
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
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'red',
        marginTop: 10,
        marginBottom: 10,
    },
})