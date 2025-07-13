// External Libraries
import { useEffect, useState } from "react";
import { Text, View, Pressable, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// External Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// Internal Components
import FilePopup from "@/components/FilePopup";

// Internal Utilities
import axiosInstance from "@/utils/axiosInstance";

// Styles
import styles from "./ProfileScreens.styles";


const ProfileScreen = ({ navigation }) => {
    const [profile, setProfile] = useState({});
    const [isFilePopupOpen, setIsFilePopupOpen] = useState(false);


    const fetchData = async () => {
        const response = await axiosInstance.get("/profile");
        setProfile(response.data);
    }


    useEffect(() => {
        fetchData().catch((err) => console.error(err));
    }, []);


    const handleViewFile = () => {
        navigation.navigate("View File", { file: profile.resume });
    }


    const handleEditFile = () => {
        setIsFilePopupOpen(true);
    }


    const handleFileUpload = async (selectedFile) => {
        const formData = new FormData();
        formData.append("file", {
            uri: selectedFile.uri,
            name: selectedFile.name,
            type: selectedFile.mimeType || "application/octet-stream",
        });

        try {
            await axiosInstance.post("/profile/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            Alert.alert("Success", "File uploaded successfully");
        } catch (error) {
            console.error("Upload failed", error.response?.data || error.message);
            Alert.alert("Upload Failed", error.response?.data?.message || "An error occurred");
        } finally {
            setIsFilePopupOpen(false);
            fetchData().catch((err) => console.error(err));
        }
    };


    return (
        <>
            <View style={ styles.container }>
                <View style={ styles.section }>
                    <View style={ styles.headRow }>
                        <Text style={ styles.title }>{ profile.name }</Text>
                        <Pressable>
                            <LinearGradient
                                style={ styles.button }
                                colors={ ["#7C3AED", "#6366F1"] }
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={ styles.buttonText }>
                                    { profile.name && profile.name
                                        .split(/\s+/)
                                        .filter(word => word.length > 0)
                                        .map(word => word[0].toUpperCase())
                                        .join('') }
                                </Text>
                            </LinearGradient>
                        </Pressable>
                    </View>

                    <View style={ styles.row }>
                        <Ionicons name="mail" style={ styles.icon } />
                        <Text style={ styles.text }>{ profile.email }</Text>
                    </View>

                    <View style={ styles.row }>
                        <Ionicons name="call" style={ styles.icon } />
                        <Text style={ styles.text }>{ profile.phone }</Text>
                    </View>

                    <View style={ styles.row }>
                        <Ionicons name="location" style={ styles.icon } />
                        <Text style={ styles.text }>{ profile.location }</Text>
                    </View>
                </View>

                <View style={ styles.section }>
                    { profile.resume ? (
                        <Pressable style={ styles.fileCard } onPress={ () => handleViewFile() }>
                            <Ionicons name="document" style={ styles.fileIcon } />
                            <Text style={ styles.fileText }>
                                { profile.resume }
                            </Text>
                            <Pressable
                                onPress={ () => handleEditFile() }
                                style={ styles.fileButton }
                            >
                                <Ionicons name="ellipsis-horizontal" style={ styles.ellipsis } />
                            </Pressable>
                        </Pressable>
                    ) : (
                        <Text>
                            Add Resume
                        </Text>
                    ) }
                </View>
            </View>

            { isFilePopupOpen && (
                <FilePopup
                    file={ profile.resume }
                    onClose={ () => setIsFilePopupOpen(false) }
                    onSubmit={ handleFileUpload }
                />
            ) }
        </>
    );
};


export default ProfileScreen;