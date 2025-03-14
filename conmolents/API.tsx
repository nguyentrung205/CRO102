import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'

const API = () => {
  const [List, setList] = useState([]);
  const apiUrl = 'http://10.24.5.135:3000/Sach'

  const [tenSach, setTenSach] = useState('')
  const [tacGia , setTacGia] = useState('')
  const [price, setPrice] = useState('')
  const [selectedID,setSelectedId] = useState(null)
useEffect(() => {
    console.log('test')
    getList();
},[])
  const getList = async() =>{
    try{
        const res = await axios.get(apiUrl)
        console.log(res.data)
        setList(res.data)
    }catch (err){
        console.log(err)
    }
  }

  const update = async () =>{
    if(!selectedID) {
      Alert.alert('Lỗi ')
      return
    }
    try{
      const updateSach = {tenSach,tacGia,price}
      await axios.put(`${apiUrl}/${selectedID}`,updateSach);
      Alert.alert('thành công')
      getList();
    }catch (err){
      console.log(err)
      Alert.alert('không thể cập nhật')
    }
  }

  const renderItem = ({item} : {item : any}) =>{
    return (
        <View>
            <Text> Tên Sách : {item.tenSach}
            </Text>
            <Text>Tác Giả : {item.tacGia}</Text>
            <Text>Giá : {item.price}</Text>
            <Button title='Cập nhật' onPress={()=>{
              setSelectedId(item.id)
              setTenSach(item.tenSach)
              setTacGia(item.tacGia)
              setPrice(item.price.toString());
            }}/>
        </View>
    )
  }
    return (
      <View>
        <FlatList
        data={List}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}></FlatList>
        <Text>Cập nhật</Text>
        <TextInput placeholder='Tên Sách' value = {tenSach} onChangeText={setTenSach}/>
        <TextInput placeholder='Tên tác giả' value = {tacGia} onChangeText={setTacGia}/>
        <TextInput placeholder='Giá' value = {price} onChangeText={setPrice}/>
        <Button title='Cập nhật' onPress={update}/>
      </View>
    )
  
}

const styles = StyleSheet.create({
  
})


export default API