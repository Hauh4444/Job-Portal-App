// External Libraries
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Internal Screens
import AuthScreen from "@/screens/AuthScreen";
import HomeScreen from "@/screens/HomeScreen";


const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <Stack.Navigator
            id="root-stack"
            initialRouteName="Auth"
            screenOptions={{
                headerTitleAlign: "center",
                headerStyle: { backgroundColor: "#f5f5f5" },
                headerTintColor: "#333",
            }}
        >
            <Stack.Screen name="Auth" component={ AuthScreen } />
            <Stack.Screen name="Home" component={ HomeScreen } />
        </Stack.Navigator>
    );
}


export default AppNavigator;