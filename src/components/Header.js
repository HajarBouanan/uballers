import React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Header (props){
    return(
        <View style={styles.header}>
            <View style={styles.menu}>
                <TouchableOpacity>
                    <Icon name="menu" size={30} color="black"/>
                </TouchableOpacity>
            </View>
            <View style={styles.logo}>
                <Text style={styles.logoText}>UBALLERS</Text>
            </View>
            <View style={styles.profile}>
                <TouchableOpacity>
                    <Icon name="account-circle-outline" size={30} color="black"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        marginBottom: 10,
        flexDirection: "row"
    },
    menu: {
        alignItems: 'center',
        justifyContent: "center",
        width: 60,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    profile:{
        width: 60,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Header