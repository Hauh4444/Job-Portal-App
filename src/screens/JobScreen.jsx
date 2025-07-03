// External Libraries
import { useState, useCallback } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Hyperlink from "react-native-hyperlink";
import { openComposer } from "react-native-email-link";
import { LinearGradient } from "expo-linear-gradient";

// External Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// Styles
import styles from "./JobScreen.styles";


const JobScreen = ({ navigation, route }) => {
    const job = route.params.job;
    const [isAtBottom, setIsAtBottom] = useState(false);


    const handleScroll = useCallback((event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;

        const isBottom =
            contentOffset.y + layoutMeasurement.height >= contentSize.height;

        setIsAtBottom((prev) => {
            if (prev !== isBottom) return isBottom;
            return prev;
        });
    }, []);


    const handleEmail = async () => {
        await openComposer({
            to: job.contactEmail
        })
    }


    const handleApply = () => {
        navigation.navigate("Apply", { job: job });
    }


    return (
        <>
            <ScrollView style={ styles.container } onScroll={ handleScroll } scrollEventThrottle={ 16 }>
                <View style={ styles.section }>
                    <Text style={ styles.title }>
                        { job.title }
                    </Text>
                    <View style={ styles.row }>
                        <Text style={ styles.text }>{job.company}</Text>
                        <Text style={ styles.dot }> • </Text>
                        <Ionicons name="location-outline" size={16} style={ styles.icon } />
                        <Text style={ styles.text }>{ job.location }</Text>
                    </View>
                    <Text style={ styles.text }>
                        { job.employmentType } | { job.workModel }
                    </Text>
                </View>

                <View style={ styles.section }>
                    <Text style={ styles.head }>
                        Salary Expectations
                    </Text>
                    <View style={ styles.card }>
                        <Text style={ styles.cardText }>
                            ${ job.salaryMin.toLocaleString() } - ${ job.salaryMax.toLocaleString() }
                        </Text>
                    </View>
                </View>

                <View style={ styles.section }>
                    <Text style={ styles.head }>
                        Requirements
                    </Text>
                    { job.requirements.map((item, index) => (
                        <View style={ styles.card } key={ index }>
                            <Text style={ styles.cardText }>
                                { item }
                            </Text>
                        </View>
                    )) }
                </View>

                <View style={ styles.section }>
                    <Text style={ styles.head }>
                        Full Job Description
                    </Text>
                    <View style={ styles.row }>
                        <Text style={ styles.strongText }>
                            Position Title: &nbsp;
                        </Text>
                        <Text style={ styles.text }>
                            { job.title }
                        </Text>
                    </View>
                    <View style={ styles.row }>
                        <Text style={ styles.strongText }>
                            Position Location: &nbsp;
                        </Text>
                        <Text style={ styles.text }>
                            { job.location }
                        </Text>
                    </View>
                    <View style={ styles.row }>
                        <Text style={ styles.strongText }>
                            Roles and Responsibilities:
                        </Text>
                    </View>
                    { job.responsibilities.map((item, index) => (
                        <View style={ styles.card } key={ index }>
                            <Text style={ styles.cardText }>
                                { item }
                            </Text>
                        </View>
                    )) }
                </View>

                <View style={ styles.section }>
                    <Text style={ styles.head }>
                        Contact
                    </Text>
                    <View style={ styles.card }>
                        <Hyperlink linkStyle={ styles.link } onPress={ handleEmail }>
                            <Text style={ styles.cardText }>
                                { job.contactEmail }
                            </Text>
                        </Hyperlink>
                    </View>
                </View>

                <View style={ styles.finalSection }>
                    { isAtBottom && (
                        <Pressable>
                            <LinearGradient
                                style={ styles.button }
                                colors={ ["#7C3AED", "#6366F1"] }
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={ styles.buttonText }>APPLY NOW</Text>
                            </LinearGradient>
                        </Pressable>
                    ) }
                </View>
            </ScrollView>

            { !isAtBottom && (
                <View style={ styles.footer }>
                    <Pressable onPress={ handleApply }>
                        <LinearGradient
                            style={ styles.button }
                            colors={ ["#7C3AED", "#6366F1"] }
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={ styles.buttonText }>APPLY NOW</Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            ) }
        </>
    )
}


export default JobScreen;