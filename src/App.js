// External Libraries
import { NavigationContainer } from "@react-navigation/native";

// Internal Contexts
import AuthProvider from "@/contexts/AuthProvider";

// Internal Navigation
import AppNavigator from "@/navigation/AppNavigator";


const App = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
}


export default App;