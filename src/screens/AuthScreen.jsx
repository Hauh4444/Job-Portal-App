// External Libraries
import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Internal Contexts
import { useAuth } from "@/contexts/AuthContext";

// Styles
import styles from "./AuthScreen.styles";


const AuthScreen = ({ navigation }) => {
    const { login } = useAuth();

    const [info, setInfo] = useState({ username: "", password: "" });
    const [error, setError] = useState("");


    const handleChange = (field, value) => {
        setInfo(prev => ({ ...prev, [field]: value }));
    };


    const handleSubmit = async () => {
        setError("");
        try {
            // TODO Need to setup backend login logic
            //await login(info);
            navigation.navigate("Home");
        } catch (error) {
            setError("Error: " + error.message || error.toString());
        }
    };


    return (
        <View style={ styles.container }>
            <View style={ styles.card }>
                <Text style={ styles.title }>
                    Welcome to Indigrow!
                </Text>

                <TextInput
                    style={ styles.input }
                    onChangeText={ (value) => handleChange("username", value) }
                    value={ info.username }
                    placeholder="Username"
                />
                <TextInput
                    style={ styles.input }
                    onChangeText={ (value) => handleChange("password", value) }
                    value={ info.password }
                    placeholder="Password"
                    secureTextEntry={ true }
                />

                <Pressable onPress={ () => handleSubmit() }>
                    <LinearGradient
                        colors={ ["#7C3AED", "#6366F1"] }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={ styles.button }
                    >
                        <Text style={ styles.buttonText }>SIGN IN</Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </View>
    );
}


export default AuthScreen;