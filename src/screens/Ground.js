import React from "react";
import { SafeAreaView, Text ,View, StyleSheet,} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { updateGround } from "../services/grounds";

// components
import Header from "../components/Header";

function Ground ({route, navigation}){

    const data = route.params.data;

    const handleAddToFavorite = function(){
        updateGround(data.id, {favorite: true})
    }

    // alert(data.groundName);
    return (
        <SafeAreaView>
            <Header/>
            <View style={styles.container}>

                <Text style={styles.name}>{data.groundName}</Text>

                <TouchableOpacity onPress={handleAddToFavorite}>
                    <View style={styles.addToFavorite}>
                        <Text style={styles.buttonText}>Ajouter au favoris</Text>
                    </View>
                </TouchableOpacity>
               
              
                <Text style={styles.title}>Localisation:</Text>
                <Text style={styles.details}>{data.address}</Text>
            
                <Text style={styles.title}>Détails du terrain:</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Accessibilité:</Text>
                    <Text style={styles.sectionDetails}> {data.limit}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Nombre de panier: </Text>
                    <Text style={styles.sectionDetails}>{data.basketNumber}</Text>
                </View>

                <View style={{...styles.section, flexDirection: "column"}}>
                    <Text style={styles.sectionTitle}>Accès en transports:</Text>
                    <Text style={styles.sectionDetails}>{data.transport}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18,
    },
    name:{
        fontSize: 28,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6
    },
    details: {
        fontSize:18,
    },
    section:{
        marginTop: 5,
        marginBottom: 10,
        flexDirection: 'row'
    },
    sectionTitle:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    sectionDetails:{
        fontSize: 16,
        flexWrap: 'wrap',
    },
    addToFavorite: {
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: "rgb(3, 102, 214)",
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 4,
    },
    removeFromFavorite: {
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: "#f25252",
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 4,
    },
    buttonText: {
        color: 'white'
    }
})

export default Ground