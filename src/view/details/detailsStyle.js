import { StyleSheet } from "react-native";


export const detailStyle = StyleSheet.create({
    card: {
        backgroundColor: 'black',
        textAlign: 'center',
        gap: 20,
        paddingTop: 70,
        paddingBottom: 100,
    },
    image: {
        width: '90%', 
        height: 250,
        resizeMode: 'contain',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'red',
        marginLeft: '5%',
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
    },
    button: {
        color: '#fff',
        borderRadius: 10,
        padding: 6,
        width: 120,
        height: 50,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 135,
    },
    textBtn: {
        fontSize: 20,
    },   
})