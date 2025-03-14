// npm i axios
// npm i jdon-server
// npx json-server --host ip db.json
// ip leen cmd gox ipconfig

import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import {FlatList, View, Text, Alert, TextInput, Button} from "react-native";
const Axios = () => {
    const [list, setList ] = useState([]);
    // const apiUrl ='http://10.24.14.63:3000/Sach';

    // them sp
    const [nameSp, setNameSp] = useState();
    const [priceSp, setPriceSp] = useState();

    useEffect(()=> {
        console.log("test");
        getList(); 
    }, []);

    const getList = async()=>{
        try {
            const res = await axios.get(apiUrl);
            console.log(res.data);
            setList(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    
    const renderItem = ({item}) => (
        <View>
            <Text style={styles.title}>
                Name:{item.name} -- Price: {item.price}
            </Text>
            <Button title="delete" onPress={() => deleteItem(item.id)} style={styles.buttonText}></Button>
        </View>
        
    )
    // add sp
    const addItem = async () => {
        try {
            await axios.post(apiUrl, {
                name: nameSp,
                price: priceSp,
            })
            Alert.alert("add success")
            getList();
        } catch (error) {
            console.log(error)
        }
    }
    // delete sp 
    const deleteItem = async(id)=>{
        try {
            const res = await axios.delete(`${apiUrl}/${id}`);
            if (res.status ===200) {
                Alert.alert('delete succes')
                getList();
            } else {
                Alert.alert('delete false')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <Text style={styles.title}>
                Axios
            </Text>
            <View>
                <TextInput style={styles.input}
                placeholder="name" onChangeText={(text)=> setNameSp(text)}></TextInput>

                <TextInput style={styles.input}
                    placeholder="price" onChangeText={(text) => setPriceSp(text)}></TextInput>
                
                <Button style={styles.buttonText} title="AddSP" onPress={addItem} />

            </View>
            <FlatList
            data={list}
                renderItem={renderItem}
                keyExtractor={item=>item.id.toString()}>
            </FlatList>
        </View>
    )
  
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        height: 50,
        borderWidth: 1,
borderColor: '#ccc',
borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginVertical: 5,
    },
    listText: {
        fontSize: 16,
        color: '#333',
    }
});

export default Axios;