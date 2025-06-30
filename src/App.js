// Internal Contexts
import AuthProvider from "@/contexts/AuthProvider";

// Internal Navigation
import AppNavigator from "@/navigation/AppNavigator";


const App = () => {
    return (
        <AuthProvider>
            <AppNavigator />
        </AuthProvider>
    );
}


export default App;