import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../api/auth";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


export const Register = ({ navigation }) => {

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const onRegister = async() => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((response)=>{
            Alert.alert("Cadastrado com sucesso!!")
            navigation.navigate("Login")
        }).catch((err)=>{
            console.error(err)
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input} value={email} placeholder="Email"/>
            <TextInput style={styles.input} value={password} placeholder="Senha"/>

            <TouchableOpacity style={styles.button} onPress={()=> onRegister()}>
                <Text style={styles.text}>Cadastre-se</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text style={styles.register}>Faça o seu Login!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '10', 
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
    },
    button: {
        color: '#fff',
        borderRadius: 10,
        padding: 6,
        width: 150,
        height: 40,
        textAlign: 'center',
        backgroundColor: 'red',
        marginTop: 6
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    register: {
        color: 'red',
        fontSize: 15,
        marginTop: 15,
        borderBottomColor: '#fff',
        borderWidth: 1
    }    
})