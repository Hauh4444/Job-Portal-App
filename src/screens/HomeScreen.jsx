// External Libraries
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

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
                <View style={ styles.card } key={ index }>
                    <Text>
                        { job.title }
                    </Text>
                    <Text>
                        { job.description }
                    </Text>
                </View>
            )) }
        </View>
    );
}


export default HomeScreen;