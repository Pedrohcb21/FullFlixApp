import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, Alert,} from "react-native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../api/auth";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";

export const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const ToLogin = async() => {
        signInWithEmailAndPassword(auth, email, password)
        .then((res)=>{
            Alert.alert("Login feito com sucesso");
            navigation.navigate("Home");
        }).catch((error)=>{
            console.log(error)
            if (error.code == "auth/wrong-password") {
                alert("senha incorreta.");
            }else if (error.code == "auth/user-not-found") {
                alert("Email não encontrado.");
            }else if (error.code == "auth/invalid-email") {
                alert("Email inválido.");
            }
        })
    }

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input} value={email} placeholder="Email" onChangeText={(e) => setEmail(e)}/>
            <TextInput style={styles.input} value={password} placeholder="Senha" onChangeText={(e) => setPass(e)}/>
            
            <TouchableOpacity style={styles.button} onPress={() => ToLogin()}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.register}>Faça o seu cadastro!</Text>
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
        width: 100,
        height: 40,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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