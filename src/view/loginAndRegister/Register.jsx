import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../api/auth";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

export const Register = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const onRegister = async() => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((response)=>{
            Alert.alert("Cadastrado com sucesso!!")
            navigation.navigate("Login")
        }).catch((error) => {
            if (error.code == "auth/email-already-in-use") {
                alert("O endereço de e-mail já está em uso.");
            } else if (error.code == "auth/invalid-email") {
                alert("O endereço de e-mail não é válido.");
            } else if (error.code == "auth/operation-not-allowed") {
                alert("Operação não permitida.");
            } else if (error.code == "auth/weak-password") {
                alert("A senha é muito fraca.");
            }
          });
    }

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input} value={email} placeholder="Email" onChangeText={(e) => setEmail(e)}/>
            <TextInput style={styles.input} value={password} placeholder="Senha" onChangeText={(e) => setPass(e)}/>

            <TouchableOpacity style={styles.button} onPress={()=> onRegister()}>
                <Text style={styles.text}>Cadastre-se</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.register}>Já possui uma conta? Faça o seu Login!</Text>
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
        width: 150,
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