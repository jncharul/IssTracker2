import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={require("../assets/bg_image.png")}
                    style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}>
                    <View style={{ flex: 0.25, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 30, color: "white" }}>
                            ISS Tracker App
                </Text>
                    </View>
                    <TouchableOpacity style={styles.buttons}
                        onPress={() => this.props.navigation.navigate("IssLocation")}>
                        <Text style={styles.buttonText}>ISS Location</Text>
                        <Text style={styles.knowMore}>{"Know more ----->"}</Text>
                        <Text style={styles.digit}>1</Text>
                        <Image source={require("../assets/iss_icon.png")}
                            style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}
                        onPress={() => this.props.navigation.navigate("Meteor")}>
                        <Text style={styles.buttonText}>Meteors</Text>
                        <Text style={styles.knowMore}>{"Know more ----->"}</Text>
                        <Text style={styles.digit}>2</Text>
                        <Image source={require("../assets/meteor_icon.png")}
                            style={styles.icon} />
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView >
        )
    }
}
const styles = StyleSheet.create({
    buttons: {
        flex: 0.25,
        backgroundColor: "white",
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 30,
        justifyContent: "center",
        paddingLeft: 40,
        borderWidth: 2
    },
    buttonText: {
        fontWeight: "bold",
        marginTop: 70,
        fontSize: 25
    },
    icon: {
        height: 200,
        width: 200,
        position: "absolute",
        top: -90,
        right: 30
    },
    knowMore: {
        color: "red",
        fontSize: 15
    },
    digit: {
        color: "rgba(183,183,183,0.5)",
        fontSize: 150,
        position: "absolute",
        right: 30
    }
})