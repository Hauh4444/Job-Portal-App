// External Libraries
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Internal Screens
import TabNavigator from "@/navigation/TabNavigator";
import JobScreen from "@/screens/JobScreen";
import ApplyScreen from "@/screens/ApplyScreen";
import ViewFileScreen from "@/screens/ViewFileScreen";


const Stack = createNativeStackNavigator();


const ProtectedStack = () => (
    <Stack.Navigator id="protected-stack">
        <Stack.Screen name="Main" component={ TabNavigator } />
        <Stack.Screen name="Job" component={ JobScreen } />
        <Stack.Screen name="Apply" component={ ApplyScreen } />
        <Stack.Screen name="View File" component={ ViewFileScreen } />
    </Stack.Navigator>
);


export default ProtectedStack;
