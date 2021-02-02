import React, { useState, useEffect } from 'react';
import {SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// components
import Header from "../components/Header";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// services
import { getAllGrounds } from "../services/grounds";

function Home (props){
    // store grounds list in state
    const [groundsList, setGroundsList] = useState();

    // simulate fetching data from server
    // fetch date once component is mounted
    // we switched the data object to array so we can use the Flatlist to display the data
    useEffect(()=>{
        getAllGrounds()
            .then(data => {
                const list = Object.keys(data).map(function(key){
                    return{
                        id: key,
                        ...data[key]
                    }
                });
                setGroundsList(list);
            });
    }, [])

    // handleCardClick:
    //This fuction is called Once the user choose to see the details of a specific ground 
    function handleClickCard (item){
        // move to "ground" screen
        props.navigation.navigate("Ground", {data: item});
    }

    return (
        <SafeAreaView>
            <Header/>
            <View style={styles.container}>
                <Text style={styles.title}>Liste des terrains</Text>
                <View style={styles.line}></View>

                <FlatList
                    data={groundsList}
                    renderItem={
                        ({item}) =>(
                            <TouchableOpacity onPress={() => handleClickCard(item)}>
                                <View style={styles.card}>
                                    <View style={styles.cardIcon}>
                                        <Icon name="map-marker" size={30} color="#B70808"/>
                                    </View>
                                    <View style={styles.cardBody}>
                                        <Text style={styles.cardTitle}>{item.groundName}</Text>
                                    </View>
                                      {/* when the user select the ground as one of his favorite we add an icon se we can show him that the ground was added successfully */}
                                    <View style={styles.cardFavorite}>
                                        {item.favorite && <Icon name="octagram" size={25} color="#B70808"/>}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    keyExtractor={(item) => item.groundId}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18
    },
    title: {
        fontSize: 20,
        fontWeight: '800'
    },
    line: {
        height: 2,
        backgroundColor: 'black',
        marginTop: 4,
        marginBottom: 10
    },

    card: {
        flexDirection: 'row',
        height: 70,
        marginTop: 10,
        backgroundColor: "#e1e1e1e1",
        borderRadius: 10,
        alignItems: 'center'
    },
    cardIcon: {
        marginHorizontal: 14
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "700"
    },
    cardBody:{
        flex:1
    },
    cardFavorite: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home;