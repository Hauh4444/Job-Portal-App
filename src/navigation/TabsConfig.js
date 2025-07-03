// navigation/tabsConfig.js
import HomeScreen from "@/screens/HomeScreen";
import ProfileScreen from "@/screens/ProfileScreen";


export const tabs = [
    {
        name: "Home",
        component: HomeScreen,
        icon: {
            focused: "home",
            unfocused: "home-outline",
        },
    },
    {
        name: "Profile",
        component: ProfileScreen,
        icon: {
            focused: "person",
            unfocused: "person-outline",
        },
    },
];
