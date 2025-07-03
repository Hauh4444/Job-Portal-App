// External Libraries
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Internal Navigation
import PublicStack from "@/navigation/PublicStack";
import ProtectedStack from "@/navigation/ProtectedStack";

// Internal Contexts
import { useAuth } from "@/contexts/AuthContext";


const AppNavigator = () => {
    const { user, checkAuthStatus } = useAuth();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        checkAuthStatus().finally(() => setLoading(false));
    }, []);


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }


    return (
        <NavigationContainer>
            { user ? <ProtectedStack /> : <PublicStack /> }
        </NavigationContainer>
    );
};


export default AppNavigator;
