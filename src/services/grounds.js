import groundsData from './groundsData.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

// this file is the bridge between our screens and the data we use from the "groundsData.json"

//this function get all data from "groundsData.json" and we used Asyncstorage so we can do reuse it as we want
export async function getAllGrounds (){
    try{
        const data = await AsyncStorage.getItem('data');
        if(data){
            return JSON.parse(data);
        } else {
            await AsyncStorage.setItem('data', JSON.stringify(groundsData));
            return groundsData;
        }
    }catch(e){
        console.log(e);
    }
}
//this function manage the action were the user add his favorite ground 
// we save the data using asyncStorage
export async function updateGround(id, params){
    try {
        const data = await AsyncStorage.getItem('data');
        const groundsList= JSON.parse(data);

        Object.assign(groundsList[id], params);
        await AsyncStorage.setItem('data', JSON.stringify(groundsList));
    } catch(e){
        console.log(e)
    }
}