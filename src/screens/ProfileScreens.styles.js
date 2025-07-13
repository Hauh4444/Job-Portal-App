// External Libraries
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    section: {
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderColor: "#E5E7EB",
        borderWidth: 1,
    },
    headRow: {
        paddingBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    row: {
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: "#111827",
    },
    button: {
        marginLeft: "auto",
        padding: 10,
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: "600",
        color: "#E5E7EB",
    },
    text: {
        fontWeight: "normal",
        fontSize: 16,
        color: "#6B7280",
    },
    icon: {
        marginRight: 4,
        fontSize: 16,
        color: "#6B7280",
    },
    fileCard: {
        marginVertical: 5,
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: "#F9FAFB",
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#111827",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 4,
    },
    fileIcon: {
        marginRight: 12,
        fontSize: 40,
        color: "#6366F1",
    },
    fileText: {
        fontSize: 16,
        color: "#111827",
    },
    fileButton: {
        marginLeft: "auto",
    },
    ellipsis: {
        fontSize: 30,
        color: "#6366F1",
    }
});


export default styles;