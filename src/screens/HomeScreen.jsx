// External Libraries
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// Internal Utilities
import axiosInstance from "@/utils/axiosInstance";

// Styles
import styles from "./HomeScreen.styles";


const HomeScreen = ({ navigation }) => {
    const [jobs, setJobs] = useState([]);


    const fetchData = async () => {
        const res = await axiosInstance.get("/jobs");
        setJobs(res.data);
    }


    useEffect(() => {
        fetchData().catch((err) => console.error(err));
    }, []);


    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Indigrow
            </Text>
            { jobs.map((job, index) => (
                <Text key={ index }>
                    { job.name }
                </Text>
            )) }
        </View>
    );
}


export default HomeScreen;