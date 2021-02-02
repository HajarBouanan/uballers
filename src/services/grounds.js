import groundsData from './groundsData.json';
import AsyncStorage from '@react-native-async-storage/async-storage';


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