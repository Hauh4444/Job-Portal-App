// External Libraries
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Internal Screens
import HomeScreen from "@/screens/HomeScreen";


const Stack = createNativeStackNavigator();


const ProtectedStack = () => (
    <Stack.Navigator id="protected-stack" initialRouteName="Home">
        <Stack.Screen name="Home" component={ HomeScreen } />
    </Stack.Navigator>
);


export default ProtectedStack;
